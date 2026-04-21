import { buttonArrowIcon } from '../../assets';
import styles from './PromoCodeBlock.module.css';

function PromoCodeBlock({
  promoCode,
  setPromoCode,
  handleApplyPromoCode,
  promoMessage,
  isPromoApplied,
}) {
  return (
    <div className="promo-code-wrapper">
      <div className="info">
        <div className="title">You Have A Promo Code?</div>
        <p className="description">
          Enter the promo code and get a 10% discount on your order.
        </p>
      </div>

      <div className="promo-code">
        <input
          type="text"
          name="promo-code"
          className="input"
          placeholder="Enter promo code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />

        <div className="button-wrapper">
          <button className="button" onClick={handleApplyPromoCode}>
            <img src={buttonArrowIcon} alt="arrow right" />
          </button>
          <div className="vertical-line"></div>
        </div>
      </div>

      <div className={styles.messageArea}>
        {promoMessage && (
          <p
            className={`${styles.promoMessage} ${
              isPromoApplied ? styles.success : styles.error
            }`}
          >
            {promoMessage}
          </p>
        )}
      </div>

      <div className="find-us">
        <h5 className="find-us-text">Find us here:</h5>

        <div className="find-us-links">
          <div className="find-us-link"><a href="#">FB</a></div>
          <div className="line"></div>
          <div className="find-us-link"><a href="#">TW</a></div>
          <div className="line"></div>
          <div className="find-us-link"><a href="#">INS</a></div>
          <div className="line"></div>
          <div className="find-us-link"><a href="#">PT</a></div>
        </div>
      </div>
    </div>
  );
}

export default PromoCodeBlock;