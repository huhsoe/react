function AdminPage({ user, onLogout }) {
  return (
    <div className="page">
      <h1>Админка</h1>
      <p>Эта страница доступна только авторизованному администратору.</p>
      <p>Текущая роль: {user.role}</p>

      <button className="button" onClick={onLogout}>
        Выйти
      </button>
    </div>
  );
}

export default AdminPage;