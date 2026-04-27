import styles from './Sidebar.module.css';

function Price({ filters }) {
  const { state, actions, available } = filters;

  const currentMin = Number(state.selectedMinPrice || available.minPrice);
  const currentMax = Number(state.selectedMaxPrice || available.maxPrice);

  const minPercent =
    ((currentMin - available.minPrice) /
      (available.maxPrice - available.minPrice)) *
    100;

  const maxPercent =
    ((currentMax - available.minPrice) /
      (available.maxPrice - available.minPrice)) *
    100;

  const isOverlapAtMin =
    currentMin === currentMax && currentMin === available.minPrice;

  const isOverlapAtMax =
    currentMin === currentMax && currentMax === available.maxPrice;

  return (
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
              min={available.minPrice}
              max={available.maxPrice}
              value={currentMin}
              onChange={(e) => {
                const value = Number(e.target.value);

                if (value <= currentMax) {
                  actions.setSelectedMinPrice(value);
                }
              }}
              className={`${styles.rangeInput} ${styles.rangeInputMin} ${
                isOverlapAtMax ? styles.rangeInputTop : ''
              }`}
            />

            <input
              type="range"
              min={available.minPrice}
              max={available.maxPrice}
              value={currentMax}
              onChange={(e) => {
                const value = Number(e.target.value);

                if (value >= currentMin) {
                  actions.setSelectedMaxPrice(value);
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
  );
}

export default Price;