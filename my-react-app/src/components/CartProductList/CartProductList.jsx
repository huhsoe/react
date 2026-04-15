import CartProductItem from '../CartProductItem/CartProductItem';

function CartProductList({
  items,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
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