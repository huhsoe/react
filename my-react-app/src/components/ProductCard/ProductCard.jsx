import styles from './ProductCard.module.css';
import { heartIcon } from '../../assets';

function ProductCard({
  product,
  favorites,
  toggleFavorite,
  cart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const isFavorite = favorites.includes(product.id);
  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="product">
      <div className="photo">
        <img
          src={product.image}
          alt={product.name}
          className={styles.photoImage}
        />

        <div className="top-bar">
          <div className="labels">
            {product.isSale && <div className="label sale">Sale</div>}
            {product.isNew && <div className="label new">New</div>}
          </div>

          <div
            className={`${styles.favoriteButton} favorites`}
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

      <div className="info">
        <div className="name">{product.name}</div>

        <div className="price">
          <div className="current-price">${product.price.toFixed(2)}</div>
          {product.oldPrice && (
            <div className="old-price">${product.oldPrice.toFixed(2)}</div>
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