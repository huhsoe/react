function HomePage({ user }) {
  return (
    <div className="page">
      <h1>Главная страница</h1>
      <p>Эта страница доступна всем пользователям.</p>

      <p>
        Статус: {user.isAuth ? 'Авторизован' : 'Гость'}
      </p>

      <p>
        Роль: {user.role ? user.role : 'нет'}
      </p>
    </div>
  );
}

export default HomePage;