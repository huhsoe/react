import data from '../../data/products.json';
import { REVIEWED_PRODUCTS_LIMIT } from '../../constants';
import styles from './Sidebar.module.css';

const REVIEWED_PRODUCTS = data.products.slice(0, REVIEWED_PRODUCTS_LIMIT);

function ReviewedProducts() {
  return (
    <div className={styles.sidebarItem}>
      <div className={styles.sidebarTitle}>Reviewed By You</div>

      <div className={styles.sidebarContent}>
        <div className={styles.reviewedProducts}>
          {REVIEWED_PRODUCTS.map((product) => (
            <div className={styles.reviewedProduct} key={product.id}>
              <div className={styles.image}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.reviewedImage}
                />
              </div>

              <div className={styles.info}>
                <div className={styles.name}>{product.name}</div>

                <div className={styles.reviewedPriceRow}>
                  <span className={styles.reviewedCurrentPrice}>
                    ${product.price.toFixed(2)}
                  </span>

                  {product.oldPrice && (
                    <span className={styles.reviewedOldPrice}>
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewedProducts;