import React from 'react';

const User = React.memo(function User({ name }) {
  console.log(`Рендер пользователя: ${name}`);
  return <li>{name}</li>;
});

export default User;