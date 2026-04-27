import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import CartPage from './pages/CartPage';
import ShopPage from './pages/ShopPage';
import { ROUTES } from './constants';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.SHOP} replace />} />
        <Route path={ROUTES.SHOP} element={<ShopPage />} />
        <Route path={ROUTES.CART} element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default App;