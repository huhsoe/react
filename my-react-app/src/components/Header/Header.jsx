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
            <img src="/icons/logo.svg" alt="logo" />
          </div>
        </div>

        <div className="menu">
          <div className="menu-item">
            <span>Home</span>
          </div>

          <div className="menu-item">
            <span>Pages</span>
            <img src="/icons/arrow.svg" alt="arrow" className="arrow-default" />
            <img src="/icons/arrow-pink.svg" alt="arrow" className="arrow-hover" />
          </div>

          <div
            className={`menu-item ${currentPage === 'shop' ? 'active' : ''}`}
            onClick={() => setCurrentPage('shop')}
          >
            <span>Shop</span>
            <img src="/icons/arrow.svg" alt="arrow" className="arrow-default" />
            <img src="/icons/arrow-pink.svg" alt="arrow" className="arrow-hover" />
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
          <img src="/icons/search.svg" alt="search" />
        </div>

        <div className="header-icon">
          <img src="/icons/user.svg" alt="user" />
        </div>

        <div className="header-icon">
          <img src="/icons/heart.svg" alt="heart" />
          <div className="counter">{favoriteCount}</div>
        </div>

        <div className="header-icon" onClick={() => setCurrentPage('cart')}>
          <img src="/icons/cart.svg" alt="cart" />
          <div className="counter">{cartCount}</div>
        </div>
      </div>
    </header>
  );
}

export default Header;