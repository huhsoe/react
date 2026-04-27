import { heartIcon } from '../../assets';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  const { favorites, toggleFavorite } = useFavorites();
  const { cartProducts, addToCart, increaseQuantity, decreaseQuantity } = useCart();

  const isFavorite = favorites.includes(product.id);
  const cartItem = cartProducts.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className={styles.product}>
      <div className={styles.photo}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.photoImage}
        />

        <div className={styles.topBar}>
          <div className={styles.labels}>
            {product.isSale && <div className={styles.label}>Sale</div>}
            {product.isNew && (
              <div className={`${styles.label} ${styles.newLabel}`}>New</div>
            )}
          </div>

          <div
            className={`${styles.favoriteButton} ${styles.favorites}`}
            onClick={() => toggleFavorite(product.id)}
          >
            <img
              src={heartIcon}
              alt="favorites"
              className={isFavorite ? styles.favoriteActive : ''}
            />
          </div>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.name}>{product.name}</div>

        <div className={styles.priceRow}>
          <div className={styles.currentPrice}>${product.price.toFixed(2)}</div>
          {product.oldPrice && (
            <div className={styles.oldPrice}>${product.oldPrice.toFixed(2)}</div>
          )}
        </div>

        {quantity === 0 ? (
          <button
            className={styles.buyButton}
            onClick={() => addToCart(product)}
          >
            Buy
          </button>
        ) : (
          <div className={styles.quantityControls}>
            <button
              className={styles.quantityButton}
              onClick={() => decreaseQuantity(product.id)}
            >
              -
            </button>

            <span className={styles.quantityValue}>{quantity}</span>

            <button
              className={styles.quantityButton}
              onClick={() => increaseQuantity(product.id)}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;