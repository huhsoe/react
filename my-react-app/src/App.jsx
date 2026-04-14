import { useState } from 'react';

function App() {
  const [postId, setPostId] = useState('');
  const [post, setPost] = useState(null);

  const getPost = async () => {
    if (!postId) return;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = await response.json();
    setPost(data);
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

      {post && post.id && (
        <div style={{ marginTop: '20px' }}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}

export default App;