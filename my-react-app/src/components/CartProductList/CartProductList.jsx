import CartProductItem from '../CartProductItem/CartProductItem';
import styles from './CartProductList.module.css';

function CartProductList({
  items,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  if (items.length === 0) {
    return <p className={styles.emptyCart}>Your cart is empty.</p>;
  }

  return (
    <div className={styles.productList}>
      {items.map((item) => (
        <CartProductItem
          key={item.id}
          item={item}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
}

export default CartProductList;