import { useCart } from '../../context/CartContext';
import usePromoCode from '../../hooks/usePromoCode';
import CartProductList from '../CartProductList/CartProductList';
import OrderSummary from '../OrderSummary/OrderSummary';
import PromoCodeBlock from '../PromoCodeBlock/PromoCodeBlock';
import styles from './Cart.module.css';

function Cart() {
  const { cartProducts } = useCart();

  const {
    promoCode,
    setPromoCode,
    isPromoApplied,
    promoMessage,
    promoDiscountPercent,
    orderPrice,
    delivery,
    total,
    handleApplyPromoCode,
  } = usePromoCode(cartProducts);

  return (
    <section className={styles.cart}>
      <div className={styles.layout}>
        <div className={styles.leftColumn}>
          <CartProductList />

          <PromoCodeBlock
            promoCode={promoCode}
            setPromoCode={setPromoCode}
            handleApplyPromoCode={handleApplyPromoCode}
            promoMessage={promoMessage}
            isPromoApplied={isPromoApplied}
          />
        </div>

        <OrderSummary
          orderPrice={orderPrice}
          isPromoApplied={isPromoApplied}
          promoDiscountPercent={promoDiscountPercent}
          delivery={delivery}
          total={total}
        />
      </div>
    </section>
  );
}

export default Cart;