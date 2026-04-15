function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img src="./images/footer-dots-left.svg" className="footer-dots-left" alt="footer-dots-left" />

        <div className="footer-info">
          <div className="column column-1">
            <div className="logo">
              <img src="./icons/logo.svg" alt="logo" />
            </div>

            <p className="about-brand">
              Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud excepteur voluptate.
            </p>

            <div className="find-us">
              <h4 className="find-us-text">Find us here:</h4>
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

          <div className="column column-2">
            <h4 className="title">About</h4>
            <ul className="custom-list">
              <li className="item"><a href="#">About us</a></li>
              <li className="item"><a href="#">Collections</a></li>
              <li className="item"><a href="#">Shop</a></li>
              <li className="item"><a href="#">Blog</a></li>
              <li className="item"><a href="#">Contact us</a></li>
            </ul>
          </div>

          <div className="column column-3">
            <h4 className="title">Useful links</h4>
            <ul className="custom-list">
              <li className="item"><a href="#">Privacy Policy</a></li>
              <li className="item"><a href="#">Terms of use</a></li>
              <li className="item"><a href="#">Support</a></li>
              <li className="item"><a href="#">Shipping details</a></li>
              <li className="item"><a href="#">FAQs</a></li>
            </ul>
          </div>

          <img src="./images/footer-dots-right.svg" className="footer-dots-right" alt="footer-dots-right" />
        </div>

        <div className="copyright">
          <p className="copyright-text">© All right reserved. Fashionee 2020</p>

          <div className="payment-methods-container">
            <p>Payment methods:</p>
            <div className="payment-methods">
              <div className="payment-method"><img src="/icons/visa.svg" alt="visa" /></div>
              <div className="payment-method"><img src="/icons/mastercard.svg" alt="mastercard" /></div>
              <div className="payment-method"><img src="/icons/paypal.svg" alt="paypal" /></div>
              <div className="payment-method"><img src="/icons/payoneer.svg" alt="payoneer" /></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;