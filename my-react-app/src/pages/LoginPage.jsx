import { Navigate } from 'react-router-dom';

function LoginPage({ user, loginAsUser, loginAsAdmin }) {
  if (user.isAuth) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <div className="page">
      <h1>Страница входа</h1>
      <p>Выберите тип входа:</p>

      <div className="buttons">
        <button className="button" onClick={loginAsUser}>
          Войти как пользователь
        </button>

        <button className="button" onClick={loginAsAdmin}>
          Войти как админ
        </button>
      </div>
    </div>
  );
}

export default LoginPage;