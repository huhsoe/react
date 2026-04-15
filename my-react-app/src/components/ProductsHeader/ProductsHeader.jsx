function ProductsHeader({ count }) {
  return (
    <div className="sort-and-count">
      <p className="products-count">
        There are <b>{count}</b> products in this category
      </p>

      <div className="sort">
        <select className="input">
          <option value="relevance">By relevance</option>
          <option value="price">By price</option>
          <option value="popularity">By popularity</option>
        </select>
      </div>
    </div>
  );
}

export default ProductsHeader;