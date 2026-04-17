import styles from './CartProductItem.module.css';

function CartProductItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  return (
    <div className="product">
      <div className="photo">
        <img
          src={item.image}
          alt={item.name}
          className={styles.productImage}
        />
      </div>

      <div className="product-info">
        <div className="title">{item.name}</div>

        <div className="price-wrapper">
          <div className="price-and-quantity">
            <div className="price">
              {item.oldPrice && (
                <div className="old-price">${item.oldPrice.toFixed(2)}</div>
              )}
              <div className="current-price">${item.price.toFixed(2)}</div>
            </div>

            <div className="quantity">
              <div
                className="count-botton"
                onClick={() => decreaseQuantity(item.id)}
              >
                -
              </div>
              <div className="count">{item.quantity}</div>
              <div
                className="count-botton"
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </div>
            </div>

            <div className="total-price">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        </div>

        <div className="close" onClick={() => removeFromCart(item.id)}>
          X
        </div>
      </div>
    </div>
  );
}

export default CartProductItem;