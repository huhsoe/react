import React, { useCallback, useState } from 'react';

const TodoItem = React.memo(function TodoItem({ id, text, onDelete }) {
  console.log(`Рендер задачи: ${text}`);

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => onDelete(id)}>Удалить</button>
    </div>
  );
});

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Изучить React' },
    { id: 2, text: 'Написать проект' },
  ]);

  const addTodo = useCallback(() => {
    const newTodo = {
      id: Date.now(),
      text: 'Новая задача',
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <div>
      <button onClick={addTodo}>Добавить задачу</button>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          onDelete={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;