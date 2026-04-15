function CartProductItem({ item }) {
  return (
    <div className="product">
      <div className="photo"></div>

      <div className="product-info">
        <div className="title">{item.name}</div>

        <div className="price-wrapper">
          <div className="price-and-quantity">
            <div className="price">
              {item.oldPrice && <div className="old-price">${item.oldPrice.toFixed(2)}</div>}
              <div className="current-price">${item.price.toFixed(2)}</div>
            </div>

            <div className="quantity">
              <div className="count-botton">-</div>
              <div className="count">{item.quantity}</div>
              <div className="count-botton">+</div>
            </div>

            <div className="total-price">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        </div>

        <div className="close">X</div>
      </div>
    </div>
  );
}

export default CartProductItem;