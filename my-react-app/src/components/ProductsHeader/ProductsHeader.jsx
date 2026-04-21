import Sort from '../Sort/Sort';
import styles from './ProductsHeader.module.css';

function ProductsHeader({ count, sortType, setSortType }) {
  return (
    <div className={styles.sortAndCount}>
      <p className={styles.productsCount}>
        There are <b>{count}</b> products in this category
      </p>

      <Sort sortType={sortType} setSortType={setSortType} />
    </div>
  );
}

export default ProductsHeader;