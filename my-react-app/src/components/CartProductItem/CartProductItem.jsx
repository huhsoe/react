import styles from './CartProductItem.module.css';

function CartProductItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  return (
    <div className={styles.product}>
      <div className={styles.photo}>
        <img
          src={item.image}
          alt={item.name}
          className={styles.productImage}
        />
      </div>

      <div className={styles.productInfo}>
        <div className={styles.title}>{item.name}</div>

        <div className={styles.priceWrapper}>
          <div className={styles.priceAndQuantity}>
            <div className={styles.price}>
              {item.oldPrice && (
                <div className={styles.oldPrice}>${item.oldPrice.toFixed(2)}</div>
              )}
              <div className={styles.currentPrice}>${item.price.toFixed(2)}</div>
            </div>

            <div className={styles.quantity}>
              <div
                className={styles.countButton}
                onClick={() => decreaseQuantity(item.id)}
              >
                -
              </div>

              <div className={styles.count}>{item.quantity}</div>

              <div
                className={styles.countButton}
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </div>
            </div>

            <div className={styles.totalPrice}>
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        </div>

        <div className={styles.close} onClick={() => removeFromCart(item.id)}>
          X
        </div>
      </div>
    </div>
  );
}

export default CartProductItem;