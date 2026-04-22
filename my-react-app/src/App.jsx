import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';

function App() {
  const [user, setUser] = useState({
    isAuth: false,
    role: null,
  });

  const loginAsUser = () => {
    setUser({
      isAuth: true,
      role: 'user',
    });
  };

  const loginAsAdmin = () => {
    setUser({
      isAuth: true,
      role: 'admin',
    });
  };

  const logout = () => {
    setUser({
      isAuth: false,
      role: null,
    });
  };

  return (
    <div className="app">
      <nav className="nav">
        <Link to="/">Главная</Link>
        <Link to="/profile">Профиль</Link>
        <Link to="/admin">Админка</Link>
        <Link to="/login">Вход</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage user={user} />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuth={user.isAuth}>
              <ProfilePage user={user} onLogout={logout} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <AdminRoute isAuth={user.isAuth} role={user.role}>
              <AdminPage user={user} onLogout={logout} />
            </AdminRoute>
          }
        />

        <Route
          path="/login"
          element={
            <LoginPage
              user={user}
              loginAsUser={loginAsUser}
              loginAsAdmin={loginAsAdmin}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;