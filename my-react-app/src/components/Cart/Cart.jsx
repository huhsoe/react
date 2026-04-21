import { useState } from 'react';
import CartProductList from '../CartProductList/CartProductList';
import OrderSummary from '../OrderSummary/OrderSummary';
import PromoCodeBlock from '../PromoCodeBlock/PromoCodeBlock';
import styles from './Cart.module.css';

function Cart({
  cartProducts,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [promoMessage, setPromoMessage] = useState('');

  const orderPrice = cartProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discountAmount = isPromoApplied ? orderPrice * 0.1 : 0;
  const delivery = cartProducts.length > 0 ? 15 : 0;
  const total = orderPrice - discountAmount + delivery;

  const handleApplyPromoCode = () => {
    if (promoCode.trim().toLowerCase() === 'ilovereact') {
      setIsPromoApplied(true);
      setPromoMessage('Promo code applied');
    } else {
      setIsPromoApplied(false);
      setPromoMessage('This promo code does not exist');
    }
  };

  const handleCheckout = () => {
    console.log('Order data:', {
      products: cartProducts,
      orderPrice,
      promoCode: isPromoApplied ? 'ilovereact' : 'No promo code',
      discount: isPromoApplied ? '10%' : 'No',
      delivery,
      total,
    });
  };

  return (
    <div className={styles.cart}>
      <div className={styles.orderWrapper}>
        <CartProductList
          items={cartProducts}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
        />

        <OrderSummary
          orderPrice={orderPrice}
          isPromoApplied={isPromoApplied}
          delivery={delivery}
          total={total}
          handleCheckout={handleCheckout}
        />
      </div>

      <PromoCodeBlock
        promoCode={promoCode}
        setPromoCode={setPromoCode}
        handleApplyPromoCode={handleApplyPromoCode}
        promoMessage={promoMessage}
        isPromoApplied={isPromoApplied}
      />
    </div>
  );
}

export default Cart;