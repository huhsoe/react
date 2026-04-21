import styles from './OrderSummary.module.css';

function OrderSummary({
  orderPrice,
  isPromoApplied,
  delivery,
  total,
  handleCheckout,
}) {
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
          <div>{isPromoApplied ? '10%' : 'No'}</div>
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