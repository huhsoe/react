import { Navigate } from 'react-router-dom';

function AdminRoute({ isAuth, role, children }) {
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  if (role !== 'admin') {
    return <Navigate to="/profile" replace />;
  }

  return children;
}

export default AdminRoute;