import Sidebar from '../Sidebar/Sidebar';
import ProductsHeader from '../ProductsHeader/ProductsHeader';
import ProductGrid from '../ProductGrid/ProductGrid';
import Pagination from '../Pagination/Pagination';
import data from '../../data/products.json';

function Showcase({
  favorites,
  toggleFavorite,
  cart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const products = data.products;

  return (
    <div className="shop">
      <Sidebar />

      <div className="products-wrapper">
        <ProductsHeader count={products.length} />
        <ProductGrid
          products={products}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          cart={cart}
          addToCart={addToCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
        <Pagination />
      </div>
    </div>
  );
}

export default Showcase;