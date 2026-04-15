function ContentBlock({ title, breadcrumbs, setCurrentPage }) {
  return (
    <div className="top-info">
      <div className="wrapper-title">
        <div className="main-block">
          <img src="/images/main-dots.svg" className="main-dots" alt="dots" />

          <div className="logo">
            <div className="wrapper-header">
              <div className="header-main">{title}</div>

              <div className="menu">
                <div className="line-vertical"></div>

                {breadcrumbs.map((item, index) => {
                  const isActive = index === breadcrumbs.length - 1;

                  return (
                    <div
                      key={index}
                      className={`menu-item ${isActive ? 'active' : ''}`}
                    >
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();

                          if (item === 'Shop') setCurrentPage('shop');
                          if (item === 'Cart') setCurrentPage('cart');
                        }}
                      >
                        {item}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="line"></div>
          </div>
        </div>

        <div className="main-banner"></div>
      </div>
    </div>
  );
}

export default ContentBlock;