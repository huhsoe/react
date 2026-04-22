import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function PostDetailsPage() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        setErrorMessage('');

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        if (!response.ok) {
          throw new Error('Не удалось загрузить пост');
        }

        const data = await response.json();

        if (!data.id) {
          throw new Error('Пост не найден');
        }

        setPost(data);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (isLoading) {
    return (
      <div className="page">
        <p>Загрузка поста...</p>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="page">
        <h1>Ошибка</h1>
        <p>{errorMessage}</p>
        <Link to="/posts">Назад к постам</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Страница поста</h1>
      <p>ID из URL: {id}</p>

      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <Link to="/posts">Назад к постам</Link>
    </div>
  );
}

export default PostDetailsPage;