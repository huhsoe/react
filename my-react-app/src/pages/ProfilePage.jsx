function ProfilePage({ user, onLogout }) {
  return (
    <div className="page">
      <h1>Профиль</h1>
      <p>Эта страница доступна только авторизованным пользователям.</p>
      <p>Текущая роль: {user.role}</p>

      <button className="button" onClick={onLogout}>
        Выйти
      </button>
    </div>
  );
}

export default ProfilePage;