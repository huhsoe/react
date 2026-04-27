import Sort from '../Sort/Sort';
import styles from './ProductsHeader.module.css';

function ProductsHeader({ count, sort }) {
  return (
    <div className={styles.sortAndCount}>
      <p className={styles.productsCount}>
        There are <b>{count}</b> products in this category
      </p>

      <Sort sort={sort} />
    </div>
  );
}

export default ProductsHeader;