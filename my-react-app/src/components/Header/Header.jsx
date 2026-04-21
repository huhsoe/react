import { useState } from 'react';
import {
  arrowIcon,
  arrowPinkIcon,
  cartIcon,
  heartIcon,
  logoIcon,
  searchIcon,
  userIcon,
} from '../../assets';
import { SHOP_PAGE, CART_PAGE } from '../../constants';
import styles from './Header.module.css';

function Header({ currentPage, setCurrentPage, favoriteCount, cartCount }) {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.leftSide}>
        <div className={styles.logoContainer}>
          <button
            type="button"
            className={`${styles.burgerMenu} ${
              isBurgerActive ? styles.burgerActive : ''
            }`}
            onClick={() => setIsBurgerActive((prev) => !prev)}
            aria-label="Toggle burger icon"
          >
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </button>

          <div className={styles.logo}>
            <img src={logoIcon} alt="logo" />
          </div>
        </div>

        <nav className={styles.menu}>
          <div className={styles.menuItem}>
            <span>Home</span>
          </div>

          <div className={styles.menuItem}>
            <span>Pages</span>
            <img src={arrowIcon} alt="arrow" className={styles.arrowDefault} />
            <img src={arrowPinkIcon} alt="arrow" className={styles.arrowHover} />
          </div>

          <div
            className={`${styles.menuItem} ${
              currentPage === SHOP_PAGE ? styles.active : ''
            }`}
            onClick={() => setCurrentPage(SHOP_PAGE)}
          >
            <span>Shop</span>
            <img src={arrowIcon} alt="arrow" className={styles.arrowDefault} />
            <img src={arrowPinkIcon} alt="arrow" className={styles.arrowHover} />
          </div>

          <div className={styles.menuItem}>
            <span>Blog</span>
          </div>

          <div className={styles.menuItem}>
            <span>Contact</span>
          </div>
        </nav>
      </div>

      <div className={styles.rightSide}>
        <div className={`${styles.headerIcon} ${styles.headerIconClickable}`}>
          <img src={searchIcon} alt="search" />
        </div>

        <div className={`${styles.headerIcon} ${styles.headerIconClickable}`}>
          <img src={userIcon} alt="user" />
        </div>

        <div className={`${styles.headerIcon} ${styles.headerIconClickable}`}>
          <img src={heartIcon} alt="heart" />
          <div className={styles.counter}>{favoriteCount}</div>
        </div>

        <div
          className={`${styles.headerIcon} ${styles.headerIconClickable}`}
          onClick={() => setCurrentPage(CART_PAGE)}
        >
          <img src={cartIcon} alt="cart" />
          <div className={styles.counter}>{cartCount}</div>
        </div>
      </div>
    </header>
  );
}

export default Header;