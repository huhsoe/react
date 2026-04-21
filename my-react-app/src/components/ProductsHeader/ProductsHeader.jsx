import Sort from '../Sort/Sort';

function ProductsHeader({ count, sortType, setSortType }) {
  return (
    <div className="sort-and-count">
      <p className="products-count">
        There are <b>{count}</b> products in this category
      </p>

      <Sort sortType={sortType} setSortType={setSortType} />
    </div>
  );
}

export default ProductsHeader;