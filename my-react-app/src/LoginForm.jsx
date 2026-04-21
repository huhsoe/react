import { useState } from 'react';

function LoginForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Имя не должно быть пустым.';
    }

    if (password.length < 6) {
      newErrors.password = 'Пароль должен содержать не менее 6 символов.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Имя:', name);
      console.log('Пароль:', password);

      setName('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Имя:</label>
        <br />
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div style={{ marginTop: '10px' }}>
        <label htmlFor="password">Пароль:</label>
        <br />
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit" style={{ marginTop: '10px' }}>
        Отправить
      </button>
    </form>
  );
}

export default LoginForm;