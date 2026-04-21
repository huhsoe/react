import CartProductItem from '../CartProductItem/CartProductItem';

function CartProductList({
  items,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  if (items.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="product-list">
      {items.map((item) => (
        <CartProductItem
          key={item.id}
          item={item}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
}

export default CartProductList;