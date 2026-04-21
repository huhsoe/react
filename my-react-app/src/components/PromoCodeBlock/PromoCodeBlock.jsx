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
    <div className={styles.promoCodeWrapper}>
      <div className={styles.info}>
        <div className={styles.title}>You Have A Promo Code?</div>
        <p className={styles.description}>
          Enter the promo code and get a 10% discount on your order.
        </p>
      </div>

      <div className={styles.promoCode}>
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

      <div className={styles.findUs}>
        <h5 className={styles.findUsText}>Find us here:</h5>

        <div className={styles.findUsLinks}>
          <div className={styles.findUsLink}><a href="#">FB</a></div>
          <div className={styles.line}></div>
          <div className={styles.findUsLink}><a href="#">TW</a></div>
          <div className={styles.line}></div>
          <div className={styles.findUsLink}><a href="#">INS</a></div>
          <div className={styles.line}></div>
          <div className={styles.findUsLink}><a href="#">PT</a></div>
        </div>
      </div>
    </div>
  );
}

export default PromoCodeBlock;