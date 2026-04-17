import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import ContentBlock from './components/ContentBlock/ContentBlock';
import Showcase from './components/Showcase/Showcase';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import data from './data/products.json';
import { LS_KEYS, PAGE_NAMES, SHOP_PAGE, CART_PAGE } from './constants';

function App() {
  const [currentPage, setCurrentPage] = useState(SHOP_PAGE);

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem(LS_KEYS.FAVORITES);
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem(LS_KEYS.CART);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem(LS_KEYS.FAVORITES, JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.CART, JSON.stringify(cart));
  }, [cart]);

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
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
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const pageTitle = currentPage === SHOP_PAGE ? PAGE_NAMES.SHOP : PAGE_NAMES.CART;

  const breadcrumbs =
    currentPage === SHOP_PAGE
      ? [PAGE_NAMES.HOME, PAGE_NAMES.SHOP]
      : [PAGE_NAMES.HOME, PAGE_NAMES.SHOP, PAGE_NAMES.CART];

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
          {currentPage === SHOP_PAGE ? (
            <Showcase
              products={products}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              cart={cart}
              addToCart={addToCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          ) : (
            <Cart
              cartProducts={cart}
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