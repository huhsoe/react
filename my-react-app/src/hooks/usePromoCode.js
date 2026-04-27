import { useMemo, useState } from 'react';
import {
  DELIVERY_PRICE,
  PROMO_CODE,
  PROMO_DISCOUNT_PERCENT,
  PROMO_DISCOUNT_RATE,
} from '../constants';

function usePromoCode(cartProducts = []) {
  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [promoMessage, setPromoMessage] = useState('');

  const orderPrice = useMemo(() => {
    return cartProducts.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  }, [cartProducts]);

  const delivery = cartProducts.length > 0 ? DELIVERY_PRICE : 0;
  const discountAmount = isPromoApplied ? orderPrice * PROMO_DISCOUNT_RATE : 0;
  const total = orderPrice - discountAmount + delivery;

  const handleApplyPromoCode = () => {
    if (promoCode.trim().toLowerCase() === PROMO_CODE) {
      setIsPromoApplied(true);
      setPromoMessage('Promo code applied');
    } else {
      setIsPromoApplied(false);
      setPromoMessage('This promo code does not exist');
    }
  };

  return {
    promoCode,
    setPromoCode,
    isPromoApplied,
    promoMessage,
    promoDiscountPercent: PROMO_DISCOUNT_PERCENT,
    orderPrice,
    delivery,
    total,
    handleApplyPromoCode,
  };
}

export default usePromoCode;