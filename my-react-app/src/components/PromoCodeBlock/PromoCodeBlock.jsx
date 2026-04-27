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
    <section className={styles.promoBlock}>
      <div className={styles.info}>
        <h2 className={styles.title}>You Have A Promo Code?</h2>

        <p className={styles.description}>
          To receive up-to-date promotional codes, subscribe to us on social networks.
        </p>
      </div>

      <div className={styles.formRow}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(event) => setPromoCode(event.target.value)}
            className={styles.input}
          />

          {promoMessage && (
            <p
              className={`${styles.message} ${
                isPromoApplied ? styles.success : styles.error
              }`}
            >
              {promoMessage}
            </p>
          )}
        </div>

        <div className={styles.buttonWrapper}>
          <button
            type="button"
            className={styles.button}
            onClick={handleApplyPromoCode}
          >
            <img src={buttonArrowIcon} alt="arrow" />
          </button>
          <div className={styles.verticalLine}></div>
        </div>
      </div>

      <div className={styles.socials}>
        <h5 className={styles.socialsTitle}>Find us here:</h5>

        <div className={styles.socialsList}>
          <a href="/">FB</a>
          <span></span>
          <a href="/">TW</a>
          <span></span>
          <a href="/">INS</a>
          <span></span>
          <a href="/">PT</a>
        </div>
      </div>
    </section>
  );
}

export default PromoCodeBlock;