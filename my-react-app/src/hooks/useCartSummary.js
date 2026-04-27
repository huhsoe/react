import { useMemo } from 'react';

function useCartSummary(cartProducts) {
  const orderPrice = useMemo(() => {
    return cartProducts.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cartProducts]);

  return {
    orderPrice,
    hasProducts: cartProducts.length > 0,
  };
}

export default useCartSummary;