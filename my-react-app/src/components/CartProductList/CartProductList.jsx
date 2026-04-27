import { useCart } from '../../context/CartContext';
import CartProductItem from '../CartProductItem/CartProductItem';
import styles from './CartProductList.module.css';

function CartProductList() {
  const { cartProducts } = useCart();

  if (!cartProducts || cartProducts.length === 0) {
    return <p className={styles.emptyCart}>Your cart is empty.</p>;
  }

  return (
    <div className={styles.productList}>
      {cartProducts.map((item) => (
        <CartProductItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CartProductList;