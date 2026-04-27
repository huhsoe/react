import { Link, useLocation } from 'react-router-dom';
import { mainDots } from '../../assets';
import { ROUTES } from '../../constants';
import styles from './ContentBlock.module.css';

function ContentBlock({ productTitle = '' }) {
  const location = useLocation();

  const isCartPage = location.pathname === ROUTES.CART;
  const isProductPage = location.pathname.startsWith('/product');
  const isShopPage =
    location.pathname === ROUTES.ROOT || location.pathname === ROUTES.SHOP;

  const title = isCartPage ? 'Cart' : 'Shop';

  const breadcrumbs = [{ label: 'Home', to: ROUTES.ROOT }];

  if (isCartPage) {
    breadcrumbs.push(
      { label: 'Shop', to: ROUTES.SHOP },
      { label: 'Cart' }
    );
  } else if (isProductPage) {
    breadcrumbs.push({ label: 'Shop', to: ROUTES.SHOP });

    if (productTitle) {
      breadcrumbs.push({ label: productTitle });
    }
  } else if (isShopPage) {
    breadcrumbs.push({ label: 'Shop' });
  }

  return (
    <section className={styles.contentBlock}>
      <div className={styles.left}>
        <img className={styles.dots} src={mainDots} alt="dots background" />

        <div className={styles.meta}>
          <h1 className={styles.title}>{title}</h1>

          <div className={styles.breadcrumbs}>
            <span className={styles.separator}></span>

            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <div className={styles.crumbItem} key={`${item.label}-${index}`}>
                  {item.to && !isLast ? (
                    <Link to={item.to} className={styles.crumbLink}>
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      className={`${styles.crumbText} ${
                        isLast ? styles.crumbTextActive : ''
                      }`}
                    >
                      {item.label}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.preview} />
      </div>
    </section>
  );
}

export default ContentBlock;