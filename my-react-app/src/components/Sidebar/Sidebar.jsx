import { searchIcon, seasonSaleBanner } from '../../assets';
import data from '../../data/products.json';
import styles from './Sidebar.module.css';

function Sidebar({
  searchTerm,
  setSearchTerm,
  availableCategories,
  availableColors,
  minAvailablePrice,
  maxAvailablePrice,
  selectedCategory,
  setSelectedCategory,
  selectedMinPrice,
  setSelectedMinPrice,
  selectedMaxPrice,
  setSelectedMaxPrice,
  selectedColors,
  toggleColor,
  applyFilters,
}) {
  const reviewedProducts = data.products.slice(0, 3);

  const currentMin = Number(selectedMinPrice || minAvailablePrice);
  const currentMax = Number(selectedMaxPrice || maxAvailablePrice);

  const minPercent =
    ((currentMin - minAvailablePrice) / (maxAvailablePrice - minAvailablePrice)) *
    100;

  const maxPercent =
    ((currentMax - minAvailablePrice) / (maxAvailablePrice - minAvailablePrice)) *
    100;

  const isOverlapAtMin =
    currentMin === currentMax && currentMin === minAvailablePrice;

  const isOverlapAtMax =
    currentMin === currentMax && currentMax === maxAvailablePrice;

  return (
    <div className="sidebar">
      <div className="search">
        <label>
          <input
            type="text"
            placeholder="Search"
            className="input search-row"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img src={searchIcon} alt="search" className="search-icon" />
        </label>
      </div>

      <div className="sidebar-item">
        <div className="sidebar-title">Categories</div>
        <div className="sidebar-content">
          <ul className="categories-list">
            <li
              className={`category ${selectedCategory === '' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('')}
            >
              All
            </li>

            {availableCategories.map((category) => (
              <li
                key={category}
                className={`category ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sidebar-item">
        <div className="sidebar-title">Price</div>
        <div className="sidebar-content">
          <div className="price-range">
            <div className="price-values">
              <span>${currentMin.toFixed(2)}</span>
              <span>${currentMax.toFixed(2)}</span>
            </div>

            <div className="range-slider">
              <div className="range-track"></div>

              <div
                className="range-progress"
                style={{
                  left: `${minPercent}%`,
                  right: `${100 - maxPercent}%`,
                }}
              ></div>

              <input
                type="range"
                min={minAvailablePrice}
                max={maxAvailablePrice}
                value={currentMin}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value <= currentMax) {
                    setSelectedMinPrice(value);
                  }
                }}
                className={`range-input range-input-min ${isOverlapAtMax ? 'range-input-top' : ''}`}
              />

              <input
                type="range"
                min={minAvailablePrice}
                max={maxAvailablePrice}
                value={currentMax}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= currentMin) {
                    setSelectedMaxPrice(value);
                  }
                }}
                className={`range-input range-input-max ${isOverlapAtMin ? 'range-input-top' : ''}`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar-item">
        <div className="sidebar-title">Colors</div>
        <div className="sidebar-content">
          <div className="colors">
            {availableColors.map((color) => {
              const id = color.toLowerCase();

              return (
                <div className="color" key={color}>
                  <input
                    type="checkbox"
                    className="color-checkbox"
                    id={id}
                    name={id}
                    checked={selectedColors.includes(color)}
                    onChange={() => toggleColor(color)}
                  />
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
          <button className="button" onClick={applyFilters}>
            Apply Filter
          </button>
          <div className="vertical-line"></div>
        </div>
      </div>

      <div className="sidebar-item">
        <div className="sidebar-title">Reviewed By You</div>
        <div className="sidebar-content">
          <div className="reviewed-products">
            {reviewedProducts.map((product) => (
              <div className="product" key={product.id}>
                <div className="image">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={styles.reviewedImage}
                  />
                </div>

                <div className="info">
                  <div className="name">{product.name}</div>
                  <div className="price">
                    <div className="current-price">${product.price.toFixed(2)}</div>
                    {product.oldPrice && (
                      <div className="old-price">${product.oldPrice.toFixed(2)}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <img src={seasonSaleBanner} className="banner" alt="season-sale-banner" />
    </div>
  );
}

export default Sidebar;