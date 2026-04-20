import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { isLoggedIn, login } = useContext(AuthContext);

  return (
    <div>
      <button onClick={login}>Войти</button>

      {isLoggedIn && <p>Вы авторизованы!</p>}
    </div>
  );
}

export default App;