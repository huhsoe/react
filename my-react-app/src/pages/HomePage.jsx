import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Главная страница</h1>
      <p>Это мини-приложение "Лента постов".</p>

      <button onClick={() => navigate('/posts')} className="button">
        Перейти к постам
      </button>
    </div>
  );
}

export default HomePage;