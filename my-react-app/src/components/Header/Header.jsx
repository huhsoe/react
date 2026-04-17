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

function Header({ currentPage, setCurrentPage, favoriteCount, cartCount }) {
  return (
    <header className="header">
      <div className="left-side">
        <div className="logo-container">
          <div className="burger-menu">
            <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
            <label className="burger" htmlFor="burger-checkbox"></label>
          </div>

          <div className="logo">
            <img src={logoIcon} alt="logo" />
          </div>
        </div>

        <div className="menu">
          <div className="menu-item">
            <span>Home</span>
          </div>

          <div className="menu-item">
            <span>Pages</span>
            <img src={arrowIcon} alt="arrow" className="arrow-default" />
            <img src={arrowPinkIcon} alt="arrow" className="arrow-hover" />
          </div>

          <div
            className={`menu-item ${currentPage === SHOP_PAGE ? 'active' : ''}`}
            onClick={() => setCurrentPage(SHOP_PAGE)}
          >
            <span>Shop</span>
            <img src={arrowIcon} alt="arrow" className="arrow-default" />
            <img src={arrowPinkIcon} alt="arrow" className="arrow-hover" />
          </div>

          <div className="menu-item">
            <span>Blog</span>
          </div>

          <div className="menu-item">
            <span>Contact</span>
          </div>
        </div>
      </div>

      <div className="right-side">
        <div className="header-icon">
          <img src={searchIcon} alt="search" />
        </div>

        <div className="header-icon">
          <img src={userIcon} alt="user" />
        </div>

        <div className="header-icon">
          <img src={heartIcon} alt="heart" />
          <div className="counter">{favoriteCount}</div>
        </div>

        <div className="header-icon" onClick={() => setCurrentPage(CART_PAGE)}>
          <img src={cartIcon} alt="cart" />
          <div className="counter">{cartCount}</div>
        </div>
      </div>
    </header>
  );
}

export default Header;