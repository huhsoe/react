import { useState } from 'react';

function App() {
  const [postId, setPostId] = useState('');
  const [post, setPost] = useState(null);
  const [error, setError] = useState('');

  const getPost = async () => {
    setPost(null);
    setError('');

    const id = Number(postId);

    if (!id || id < 1 || id > 100) {
      setError('Пост не найден');
      return;
    }

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();

      if (!data || !data.title || !data.body) {
        setError('Пост не найден');
        return;
      }

      setPost(data);
    } catch (err) {
      setError('Пост не найден');
    }
  };

  return (
    <div>
      <h1>Получение поста по ID</h1>

      <input
        type="number"
        placeholder="Введите ID поста"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />

      <button onClick={getPost} style={{ marginLeft: '10px' }}>
        Получить пост
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {post && (
        <div style={{ marginTop: '20px' }}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}

export default App;