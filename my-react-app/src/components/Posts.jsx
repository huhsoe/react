import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/postsSlice';

function Posts() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  return (
    <section>
      <h1>Posts</h1>

      {status === 'loading' && <p>Loading posts...</p>}

      {status === 'failed' && <p>Error: {error}</p>}

      {status === 'succeeded' && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Posts;