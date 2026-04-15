import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import ContentBlock from './components/ContentBlock/ContentBlock';
import Showcase from './components/Showcase/Showcase';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import data from './data/products.json';

function App() {
  const [currentPage, setCurrentPage] = useState('shop');

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (productId) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === productId);

      if (existing) {
        return prev.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { id: productId, quantity: 1 }];
    });
  };

  const increaseQuantity = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const products = data.products;

  const cartProducts = cart.map((cartItem) => {
    const product = products.find((item) => item.id === cartItem.id);
    return {
      ...product,
      quantity: cartItem.quantity,
    };
  });

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const pageTitle = currentPage === 'shop' ? 'Shop' : 'Cart';
  const breadcrumbs =
    currentPage === 'shop' ? ['Home', 'Shop'] : ['Home', 'Shop', 'Cart'];

  return (
    <>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        favoriteCount={favorites.length}
        cartCount={cartCount}
      />

      <main className="main">
        <ContentBlock
          title={pageTitle}
          breadcrumbs={breadcrumbs}
          setCurrentPage={setCurrentPage}
        />

        <div className="container">
          {currentPage === 'shop' ? (
            <Showcase
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              cart={cart}
              addToCart={addToCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          ) : (
            <Cart
              cartProducts={cartProducts}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;