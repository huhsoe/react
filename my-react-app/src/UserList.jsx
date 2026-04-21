import React, { useState } from 'react';
import User from './User';

function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Анна' },
    { id: 2, name: 'Софья' },
    { id: 3, name: 'Мария' },
  ]);

  const addUser = () => {
    const newUser = {
      id: Date.now(),
      name: `Пользователь ${users.length + 1}`,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div>
      <button onClick={addUser}>Добавить пользователя</button>

      <ul>
        {users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    </div>
  );
}

export default UserList;