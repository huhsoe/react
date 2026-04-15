import CartProductList from '../CartProductList/CartProductList';
import OrderSummary from '../OrderSummary/OrderSummary';
import PromoCodeBlock from '../PromoCodeBlock/PromoCodeBlock';

function Cart({
  cartProducts,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  return (
    <div className="cart">
      <div className="order-wrapper">
        <CartProductList
          items={cartProducts}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
        />
        <OrderSummary items={cartProducts} />
      </div>

      <PromoCodeBlock />
    </div>
  );
}

export default Cart;