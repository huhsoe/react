import { Link, useSearchParams } from 'react-router-dom';

const posts = [
  { id: 1, title: 'Первый пост' },
  { id: 2, title: 'Второй пост' },
  { id: 3, title: 'Третий пост' },
];

function PostsPage() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('filter');

  return (
    <div className="page">
      <h1>Лента постов</h1>

      {filter && <p>Фильтр: {filter}</p>}

      <ul className="list">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsPage;