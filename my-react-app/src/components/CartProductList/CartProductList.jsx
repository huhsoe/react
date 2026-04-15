import CartProductItem from '../CartProductItem/CartProductItem';

function CartProductList({ items }) {
  return (
    <div className="product-list">
      {items.map((item) => (
        <CartProductItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CartProductList;