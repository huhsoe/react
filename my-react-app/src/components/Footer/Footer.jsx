import {
  footerDotsLeft,
  footerDotsRight,
  logoIcon,
  mastercardIcon,
  paypalIcon,
  payoneerIcon,
  sendIcon,
  visaIcon,
} from '../../assets';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <img
          src={footerDotsLeft}
          className={styles.footerDotsLeft}
          alt="footer-dots-left"
        />

        <div className={styles.footerInfo}>
          <div className={`${styles.column} ${styles.column1}`}>
            <div className={styles.logo}>
              <img src={logoIcon} alt="logo" />
            </div>

            <p className={styles.aboutBrand}>
              Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud
              excepteur voluptate.
            </p>

            <div className={styles.findUs}>
              <h4 className={styles.findUsText}>Find us here:</h4>
              <div className={styles.findUsLinks}>
                <div className={styles.findUsLink}>
                  <a href="#">FB</a>
                </div>
                <div className={styles.line}></div>
                <div className={styles.findUsLink}>
                  <a href="#">TW</a>
                </div>
                <div className={styles.line}></div>
                <div className={styles.findUsLink}>
                  <a href="#">INS</a>
                </div>
                <div className={styles.line}></div>
                <div className={styles.findUsLink}>
                  <a href="#">PT</a>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.column} ${styles.column2}`}>
            <h4 className={styles.title}>About</h4>
            <ul className={styles.customList}>
              <li className={styles.item}>
                <a href="#">About us</a>
              </li>
              <li className={styles.item}>
                <a href="#">Collections</a>
              </li>
              <li className={styles.item}>
                <a href="#">Shop</a>
              </li>
              <li className={styles.item}>
                <a href="#">Blog</a>
              </li>
              <li className={styles.item}>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>

          <div className={`${styles.column} ${styles.column3}`}>
            <h4 className={styles.title}>Useful links</h4>
            <ul className={styles.customList}>
              <li className={styles.item}>
                <a href="#">Privacy Policy</a>
              </li>
              <li className={styles.item}>
                <a href="#">Terms of use</a>
              </li>
              <li className={styles.item}>
                <a href="#">Support</a>
              </li>
              <li className={styles.item}>
                <a href="#">Shipping details</a>
              </li>
              <li className={styles.item}>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>

          <div className={`${styles.column} ${styles.column4}`}>
            <h3 className={styles.title}>Newsletter</h3>
            <div className={styles.newsletterText}>
              Subscribe to be the first to hear about deals, offers and upcoming
              collections.
            </div>

            <div className={styles.newsletterForm}>
              <form action="#">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className={styles.newsletterEmail}
                />
                <img src={sendIcon} alt="send" className={styles.sendIcon} />
              </form>
            </div>
          </div>

          <img
            src={footerDotsRight}
            className={styles.footerDotsRight}
            alt="footer-dots-right"
          />
        </div>

        <div className={styles.copyright}>
          <p className={styles.copyrightText}>
            © All right reserved. Fashionee 2020
          </p>

          <div className={styles.paymentMethodsContainer}>
            <p>Payment methods:</p>
            <div className={styles.paymentMethods}>
              <div className={styles.paymentMethod}>
                <img src={visaIcon} alt="visa" />
              </div>
              <div className={styles.paymentMethod}>
                <img src={mastercardIcon} alt="mastercard" />
              </div>
              <div className={styles.paymentMethod}>
                <img src={paypalIcon} alt="paypal" />
              </div>
              <div className={styles.paymentMethod}>
                <img src={payoneerIcon} alt="payoneer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;