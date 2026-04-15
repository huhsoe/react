import data from '../../data/products.json';

function Sidebar() {
  const reviewedProducts = data.products.slice(0, 3);

  return (
    <div className="sidebar">
      <div className="search">
        <label>
          <input type="text" placeholder="Search" className="input search-row" />
          <img src="/icons/search.svg" alt="search" className="search-icon" />
        </label>
      </div>

      <div className="sidebar-item">
        <div className="sidebar-title">Categories</div>
        <div className="sidebar-content">
          <ul className="categories-list">
            <li className="category">All</li>
            <li className="category active">Men</li>
            <li className="category">Women</li>
            <li className="category">Accessories</li>
            <li className="category">New Arrivals</li>
          </ul>
        </div>
      </div>

      <div className="sidebar-item">
        <div className="sidebar-title">Price</div>
        <div className="sidebar-content">
          <div className="price-bar">
            <input type="text" placeholder="0" className="input" />
            <input type="text" placeholder="200" className="input" />
          </div>
        </div>
      </div>

      <div className="sidebar-item">
        <div className="sidebar-title">Colors</div>
        <div className="sidebar-content">
          <div className="colors">
            {['Black', 'Blue', 'Red', 'Yellow', 'Green'].map((color) => {
              const id = color.toLowerCase();

              return (
                <div className="color" key={id}>
                  <input type="checkbox" className="color-checkbox" id={id} name={id} value={id} />
                  <label htmlFor={id} className="color-name">
                    {color}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="sidebar-item">
        <div className="button-wrapper">
          <button className="button">Apply Filter</button>
          <div className="vertical-line"></div>
        </div>
      </div>

      <div className="sidebar-item">
        <div className="sidebar-title">Reviewed By You</div>
        <div className="sidebar-content">
          <div className="reviewed-products">
            {reviewedProducts.map((product) => (
              <div className="product" key={product.id}>
                <div
                  className="image"
                  style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>

                <div className="info">
                  <div className="name">{product.name}</div>
                  <div className="price">
                    <div className="current-price">${product.price.toFixed(2)}</div>
                    {product.oldPrice && <div className="old-price">${product.oldPrice.toFixed(2)}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <img src="/images/season-sale-banner.svg" className="banner" alt="season-sale-banner" />
    </div>
  );
}

export default Sidebar;