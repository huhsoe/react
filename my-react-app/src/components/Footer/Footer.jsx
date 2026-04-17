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

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img
          src={footerDotsLeft}
          className="footer-dots-left"
          alt="footer-dots-left"
        />

        <div className="footer-info">
          <div className="column column-1">
            <div className="logo">
              <img src={logoIcon} alt="logo" />
            </div>

            <p className="about-brand">
              Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud
              excepteur voluptate.
            </p>

            <div className="find-us">
              <h4 className="find-us-text">Find us here:</h4>
              <div className="find-us-links">
                <div className="find-us-link">
                  <a href="#">FB</a>
                </div>
                <div className="line"></div>
                <div className="find-us-link">
                  <a href="#">TW</a>
                </div>
                <div className="line"></div>
                <div className="find-us-link">
                  <a href="#">INS</a>
                </div>
                <div className="line"></div>
                <div className="find-us-link">
                  <a href="#">PT</a>
                </div>
              </div>
            </div>
          </div>

          <div className="column column-2">
            <h4 className="title">About</h4>
            <ul className="custom-list">
              <li className="item">
                <a href="#">About us</a>
              </li>
              <li className="item">
                <a href="#">Collections</a>
              </li>
              <li className="item">
                <a href="#">Shop</a>
              </li>
              <li className="item">
                <a href="#">Blog</a>
              </li>
              <li className="item">
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>

          <div className="column column-3">
            <h4 className="title">Useful links</h4>
            <ul className="custom-list">
              <li className="item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="item">
                <a href="#">Terms of use</a>
              </li>
              <li className="item">
                <a href="#">Support</a>
              </li>
              <li className="item">
                <a href="#">Shipping details</a>
              </li>
              <li className="item">
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>

          <div className="column column-4">
            <h3 className="title">Newsletter</h3>
            <div className="newsletter-text">
              Subscribe to be the first to hear about deals, offers and upcoming
              collections.
            </div>

            <div className="newsletter-form">
              <form action="#">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="newsletter-email"
                />
                <img src={sendIcon} alt="send" className="send-icon" />
              </form>
            </div>
          </div>

          <img
            src={footerDotsRight}
            className="footer-dots-right"
            alt="footer-dots-right"
          />
        </div>

        <div className="copyright">
          <p className="copyright-text">© All right reserved. Fashionee 2020</p>

          <div className="payment-methods-container">
            <p>Payment methods:</p>
            <div className="payment-methods">
              <div className="payment-method">
                <img src={visaIcon} alt="visa" />
              </div>
              <div className="payment-method">
                <img src={mastercardIcon} alt="mastercard" />
              </div>
              <div className="payment-method">
                <img src={paypalIcon} alt="paypal" />
              </div>
              <div className="payment-method">
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