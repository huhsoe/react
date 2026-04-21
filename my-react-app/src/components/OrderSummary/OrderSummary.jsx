function OrderSummary({
  orderPrice,
  isPromoApplied,
  delivery,
  total,
  handleCheckout,
}) {
  return (
    <div className="order">
      <div className="title">Your Order</div>

      <div className="order-price-wrapper">
        <div className="price-row">
          <div className="name">Order price</div>
          <div className="price">${orderPrice.toFixed(2)}</div>
        </div>

        <div className="price-row">
          <div className="name">Discount for promo code</div>
          <div>{isPromoApplied ? '10%' : 'No'}</div>
        </div>

        <div className="price-row delimiter">
          <div className="name">Delivery</div>
          <div className="price">${delivery.toFixed(2)}</div>
        </div>

        <div className="price-row total">
          <div className="name">Total</div>
          <div className="price">${total.toFixed(2)}</div>
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