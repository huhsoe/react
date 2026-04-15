function Cart() {
  return (
    <div className="cart">
      <div className="order-wrapper">
        <div className="product-list">
          <div className="product">
            <div className="photo"></div>

            <div className="product-info">
              <div className="title">Fashionee - Catton Shirt (S)</div>

              <div className="price-wrapper">
                <div className="price-and-quantity">
                  <div className="price">
                    <div className="old-price">$52.99</div>
                    <div className="current-price">$35.99</div>
                  </div>

                  <div className="quantity">
                    <div className="count-botton">-</div>
                    <div className="count">1</div>
                    <div className="count-botton">+</div>
                  </div>

                  <div className="total-price">$35.99</div>
                </div>
              </div>

              <div className="close">X</div>
            </div>
          </div>

          <div className="product">
            <div className="photo"></div>

            <div className="product-info">
              <div className="title">Spray Wrap Skirt</div>

              <div className="price-wrapper">
                <div className="price-and-quantity">
                  <div className="price">
                    <div className="current-price">$110.99</div>
                  </div>

                  <div className="quantity">
                    <div className="count-botton">-</div>
                    <div className="count">1</div>
                    <div className="count-botton">+</div>
                  </div>

                  <div className="total-price">$110.99</div>
                </div>
              </div>

              <div className="close">X</div>
            </div>
          </div>
        </div>

        <div className="order">
          <div className="title">Your Order</div>

          <div className="order-price-wrapper">
            <div className="price-row">
              <div className="name">Order price</div>
              <div className="price">$146.98</div>
            </div>

            <div className="price-row">
              <div className="name">Discount for promo code</div>
              <div>No</div>
            </div>

            <div className="price-row delimiter">
              <div className="name">
                Delivery <span className="additional">(Aug 02 at 16:00)</span>
              </div>
              <div className="price">$16</div>
            </div>

            <div className="price-row total">
              <div className="name">Total</div>
              <div className="price">$162.98</div>
            </div>
          </div>

          <div className="button-wrapper">
            <button className="button">Checkout</button>
            <div className="vertical-line"></div>
          </div>
        </div>
      </div>

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
    </div>
  );
}

export default Cart;