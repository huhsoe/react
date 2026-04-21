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
    <div className={styles.sidebar}>
      <div className={styles.search}>
        <label>
          <input
            type="text"
            placeholder="Search"
            className={`input ${styles.searchRow}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img src={searchIcon} alt="search" className={styles.searchIcon} />
        </label>
      </div>

      <div className={styles.sidebarItem}>
        <div className={styles.sidebarTitle}>Categories</div>
        <div className={styles.sidebarContent}>
          <ul className={styles.categoriesList}>
            <li
              className={`${styles.category} ${selectedCategory === '' ? styles.activeCategory : ''}`}
              onClick={() => setSelectedCategory('')}
            >
              All
            </li>

            {availableCategories.map((category) => (
              <li
                key={category}
                className={`${styles.category} ${
                  selectedCategory === category ? styles.activeCategory : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.sidebarItem}>
        <div className={styles.sidebarTitle}>Price</div>
        <div className={styles.sidebarContent}>
          <div className={styles.priceRange}>
            <div className={styles.priceValues}>
              <span>${currentMin.toFixed(2)}</span>
              <span>${currentMax.toFixed(2)}</span>
            </div>

            <div className={styles.rangeSlider}>
              <div className={styles.rangeTrack}></div>

              <div
                className={styles.rangeProgress}
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
                className={`${styles.rangeInput} ${styles.rangeInputMin} ${
                  isOverlapAtMax ? styles.rangeInputTop : ''
                }`}
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
                className={`${styles.rangeInput} ${styles.rangeInputMax} ${
                  isOverlapAtMin ? styles.rangeInputTop : ''
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sidebarItem}>
        <div className={styles.sidebarTitle}>Colors</div>
        <div className={styles.sidebarContent}>
          <div className={styles.colors}>
            {availableColors.map((color) => {
              const id = color.toLowerCase();

              return (
                <div className={styles.color} key={color}>
                  <input
                    type="checkbox"
                    className={styles.colorCheckbox}
                    id={id}
                    name={id}
                    checked={selectedColors.includes(color)}
                    onChange={() => toggleColor(color)}
                  />
                  <label htmlFor={id} className={styles.colorName}>
                    {color}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.sidebarItem}>
        <div className="button-wrapper">
          <button className="button" onClick={applyFilters}>
            Apply Filter
          </button>
          <div className="vertical-line"></div>
        </div>
      </div>

      <div className={styles.sidebarItem}>
        <div className={styles.sidebarTitle}>Reviewed By You</div>
        <div className={styles.sidebarContent}>
          <div className={styles.reviewedProducts}>
            {reviewedProducts.map((product) => (
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

      <img
        src={seasonSaleBanner}
        className={styles.banner}
        alt="season-sale-banner"
      />
    </div>
  );
}

export default Sidebar;