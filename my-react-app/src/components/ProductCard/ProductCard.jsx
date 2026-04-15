function ProductCard({
  product,
  favorites,
  toggleFavorite,
  cart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const isFavorite = favorites.includes(product.id);
  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="product">
      <div
        className="photo"
        style={{
          backgroundImage: `url(${product.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="top-bar">
          <div className="labels">
            {product.isSale && <div className="label sale">Sale</div>}
            {product.isNew && <div className="label new">New</div>}
          </div>

          <div
            className="favorites"
            onClick={() => toggleFavorite(product.id)}
            style={{ cursor: 'pointer' }}
          >
            <img
              src="/icons/heart.svg"
              alt="favorites"
              style={{
                filter: isFavorite
                  ? 'invert(41%) sepia(76%) saturate(1360%) hue-rotate(314deg) brightness(101%) contrast(101%)'
                  : 'none',
              }}
            />
          </div>
        </div>
      </div>

      <div className="info">
        <div className="name">{product.name}</div>

        <div className="price">
          <div className="current-price">${product.price.toFixed(2)}</div>
          {product.oldPrice && (
            <div className="old-price">${product.oldPrice.toFixed(2)}</div>
          )}
        </div>

        {quantity === 0 ? (
          <button
            onClick={() => addToCart(product.id)}
            style={{
              marginTop: '10px',
              padding: '10px 16px',
              border: 'none',
              background: 'black',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Buy
          </button>
        ) : (
          <div
            style={{
              marginTop: '10px',
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            <button onClick={() => decreaseQuantity(product.id)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => increaseQuantity(product.id)}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;