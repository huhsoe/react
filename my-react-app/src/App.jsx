import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header/Header';
import ContentBlock from './components/ContentBlock/ContentBlock';
import Showcase from './components/Showcase/Showcase';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import data from './data/products.json';
import { LS_KEYS, PAGE_NAMES, SHOP_PAGE, CART_PAGE } from './constants';

const ITEMS_PER_PAGE = 12;

function App() {
  const products = data.products;

  const [currentPageName, setCurrentPageName] = useState(SHOP_PAGE);

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem(LS_KEYS.FAVORITES);
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem(LS_KEYS.CART);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  const [sortType, setSortType] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);

  const availableCategories = useMemo(() => {
    return [...new Set(products.flatMap((product) => product.categories))];
  }, [products]);

  const availableColors = useMemo(() => {
    return [...new Set(products.map((product) => product.color))];
  }, [products]);

  const minAvailablePrice = useMemo(() => {
    return Math.min(...products.map((product) => product.price));
  }, [products]);

  const maxAvailablePrice = useMemo(() => {
    return Math.max(...products.map((product) => product.price));
  }, [products]);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMinPrice, setSelectedMinPrice] = useState('');
  const [selectedMaxPrice, setSelectedMaxPrice] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);

  const [appliedFilters, setAppliedFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    colors: [],
  });

  useEffect(() => {
    localStorage.setItem(LS_KEYS.FAVORITES, JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.CART, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 400);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchTerm, appliedFilters, sortType]);

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

  const applyFilters = () => {
    setAppliedFilters({
      category: selectedCategory,
      minPrice: selectedMinPrice,
      maxPrice: selectedMaxPrice,
      colors: selectedColors,
    });
  };

  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((item) => item !== color)
        : [...prev, color]
    );
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());

      const matchesCategory = appliedFilters.category
        ? product.categories.includes(appliedFilters.category)
        : true;

      const matchesMinPrice =
        appliedFilters.minPrice !== ''
          ? product.price >= Number(appliedFilters.minPrice)
          : true;

      const matchesMaxPrice =
        appliedFilters.maxPrice !== ''
          ? product.price <= Number(appliedFilters.maxPrice)
          : true;

      const matchesColors =
        appliedFilters.colors.length > 0
          ? appliedFilters.colors.includes(product.color)
          : true;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesColors
      );
    });
  }, [products, debouncedSearchTerm, appliedFilters]);

  const sortedProducts = useMemo(() => {
    const copiedProducts = [...filteredProducts];

    if (sortType === 'name') {
      return copiedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortType === 'price') {
      return copiedProducts.sort((a, b) => a.price - b.price);
    }

    return copiedProducts;
  }, [filteredProducts, sortType]);

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    return sortedProducts.slice(startIndex, endIndex);
  }, [sortedProducts, currentPage]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const pageTitle =
    currentPageName === SHOP_PAGE ? PAGE_NAMES.SHOP : PAGE_NAMES.CART;

  const breadcrumbs =
    currentPageName === SHOP_PAGE
      ? [PAGE_NAMES.HOME, PAGE_NAMES.SHOP]
      : [PAGE_NAMES.HOME, PAGE_NAMES.SHOP, PAGE_NAMES.CART];

  return (
    <>
      <Header
        currentPage={currentPageName}
        setCurrentPage={setCurrentPageName}
        favoriteCount={favorites.length}
        cartCount={cartCount}
      />

      <main className="main">
        <ContentBlock
          title={pageTitle}
          breadcrumbs={breadcrumbs}
          setCurrentPage={setCurrentPageName}
        />

        <div className="container">
          {currentPageName === SHOP_PAGE ? (
            <Showcase
              products={paginatedProducts}
              totalCount={sortedProducts.length}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              cart={cart}
              addToCart={addToCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              availableCategories={availableCategories}
              availableColors={availableColors}
              minAvailablePrice={minAvailablePrice}
              maxAvailablePrice={maxAvailablePrice}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedMinPrice={selectedMinPrice}
              setSelectedMinPrice={setSelectedMinPrice}
              selectedMaxPrice={selectedMaxPrice}
              setSelectedMaxPrice={setSelectedMaxPrice}
              selectedColors={selectedColors}
              toggleColor={toggleColor}
              applyFilters={applyFilters}
              sortType={sortType}
              setSortType={setSortType}
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
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