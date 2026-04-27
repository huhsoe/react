import { useCart } from '../../context/CartContext';
import styles from './OrderSummary.module.css';

function OrderSummary({
  orderPrice = 0,
  isPromoApplied = false,
  promoDiscountPercent = 0,
  delivery = 0,
  total = 0,
}) {
  const { cartProducts } = useCart();

  const discountLabel = isPromoApplied ? `${promoDiscountPercent}%` : 'No';

  const handleCheckout = () => {
    const orderData = {
      products: cartProducts,
      orderPrice,
      discount: discountLabel,
      delivery,
      total,
    };

    console.log('Order data:', orderData);
  };

  return (
    <div className={styles.order}>
      <div className={styles.title}>Your Order</div>

      <div className={styles.orderPriceWrapper}>
        <div className={styles.priceRow}>
          <div className={styles.name}>Order price</div>
          <div className={styles.price}>${orderPrice.toFixed(2)}</div>
        </div>

        <div className={styles.priceRow}>
          <div className={styles.name}>Discount for promo code</div>
          <div>{discountLabel}</div>
        </div>

        <div className={`${styles.priceRow} ${styles.delimiter}`}>
          <div className={styles.name}>Delivery</div>
          <div className={styles.price}>${delivery.toFixed(2)}</div>
        </div>

        <div className={`${styles.priceRow} ${styles.total}`}>
          <div className={styles.name}>Total</div>
          <div className={styles.price}>${total.toFixed(2)}</div>
        </div>
      </div>

      <div className="button-wrapper">
        <button className="button" onClick={handleCheckout}>
          Checkout
        </button>
        <div className="vertical-line"></div>
      </div>
    </div>
  );
}

export default OrderSummary;