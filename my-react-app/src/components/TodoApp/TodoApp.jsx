import { useEffect, useState } from 'react';
import useRequest from '../../hooks/useRequest';
import './TodoApp.css';

const API_URL = 'http://localhost:3002/todos';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');

  const { request, isLoading, error } = useRequest();

  const loadTodos = async () => {
    const todosFromServer = await request(API_URL);
    setTodos(todosFromServer);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAddTodo = async (event) => {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    const newTodo = await request(API_URL, 'POST', {
      title: trimmedTitle,
    });

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    setTitle('');
  };

  const handleDeleteTodo = async (id) => {
    await request(`${API_URL}/${id}`, 'DELETE');

    setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
  };

  const handleStartEdit = (todo) => {
    setEditingId(todo._id);
    setEditingTitle(todo.title);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingTitle('');
  };

  const handleSaveEdit = async (id) => {
    const trimmedTitle = editingTitle.trim();

    if (!trimmedTitle) {
      return;
    }

    const updatedTodo = await request(`${API_URL}/${id}`, 'PATCH', {
      title: trimmedTitle,
    });

    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo._id === id) {
          return updatedTodo;
        }

        return todo;
      })
    );

    setEditingId(null);
    setEditingTitle('');
  };

  return (
    <main className="todo-page">
      <h1 className="todo-page__title">Todo List</h1>

      <form className="todo-form" onSubmit={handleAddTodo}>
        <input
          className="todo-form__input"
          type="text"
          placeholder="Введите todo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <button className="todo-form__button" type="submit">
          Добавить
        </button>
      </form>

      {isLoading && <p className="todo-page__message">Загрузка...</p>}

      {error && <p className="todo-page__error">{error}</p>}

      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-list__item" key={todo._id}>
            {editingId === todo._id ? (
              <>
                <input
                  className="todo-list__edit-input"
                  type="text"
                  value={editingTitle}
                  onChange={(event) => setEditingTitle(event.target.value)}
                />

                <button
                  className="todo-list__button"
                  type="button"
                  onClick={() => handleSaveEdit(todo._id)}
                >
                  Сохранить
                </button>

                <button
                  className="todo-list__button"
                  type="button"
                  onClick={handleCancelEdit}
                >
                  Отмена
                </button>
              </>
            ) : (
              <>
                <span className="todo-list__title">{todo.title}</span>

                <button
                  className="todo-list__button"
                  type="button"
                  onClick={() => handleStartEdit(todo)}
                >
                  Редактировать
                </button>

                <button
                  className="todo-list__button"
                  type="button"
                  onClick={() => handleDeleteTodo(todo._id)}
                >
                  Удалить
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default TodoApp;