function PromoCodeBlock() {
  return (
    <div className="promo-code-wrapper">
      <div className="info">
        <div className="title">You Have A Promo Code?</div>
        <p className="description">
          To receive up-to-date promotional codes, subscribe to us on social networks.
        </p>
      </div>

      <div className="promo-code">
        <input type="text" name="promo-code" className="input" placeholder="Enter promo code" />

        <div className="button-wrapper">
          <button className="button">
            <img src="/icons/button-arrow.svg" alt="arrow right" />
          </button>
          <div className="vertical-line"></div>
        </div>
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