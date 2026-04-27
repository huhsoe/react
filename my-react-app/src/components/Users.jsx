import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../store/usersSlice';

function Users() {
  const [name, setName] = useState('');

  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) {
      return;
    }

    dispatch(addUser(trimmedName));
    setName('');
  };

  return (
    <div>
      <h1>Users</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите имя"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <button type="submit">Добавить пользователя</button>
      </form>

      {users.length === 0 ? (
        <p>Пользователей пока нет</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <span>{user.name}</span>

              <button type="button" onClick={() => dispatch(removeUser(user.id))}>
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;