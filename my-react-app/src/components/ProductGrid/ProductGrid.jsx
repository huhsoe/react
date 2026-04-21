import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.css';

function ProductGrid({
  products,
  favorites,
  toggleFavorite,
  cart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          cart={cart}
          addToCart={addToCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      ))}
    </div>
  );
}

export default ProductGrid;