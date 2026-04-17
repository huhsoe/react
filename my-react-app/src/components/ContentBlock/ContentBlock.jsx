import { mainDots } from '../../assets';
import { CART_PAGE, PAGE_NAMES, SHOP_PAGE } from '../../constants';

function ContentBlock({ title, breadcrumbs, setCurrentPage }) {
  return (
    <div className="top-info">
      <div className="wrapper-title">
        <div className="main-block">
          <img src={mainDots} className="main-dots" alt="dots" />

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

                          if (item === PAGE_NAMES.SHOP) setCurrentPage(SHOP_PAGE);
                          if (item === PAGE_NAMES.CART) setCurrentPage(CART_PAGE);
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