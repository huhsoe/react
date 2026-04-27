import Categories from './Categories';
import Colors from './Colors';
import Price from './Price';
import ReviewedProducts from './ReviewedProducts';
import Search from './Search';
import styles from './Sidebar.module.css';

function Sidebar({ search, filters }) {
  return (
    <div className={styles.sidebar}>
      <Search search={search} />

      <Categories filters={filters} />

      <Price filters={filters} />

      <Colors filters={filters} />

      <div className={styles.sidebarItem}>
        <div className="button-wrapper">
          <button className="button" onClick={filters.actions.applyFilters}>
            Apply Filter
          </button>
          <div className="vertical-line"></div>
        </div>
      </div>

      <ReviewedProducts />
    </div>
  );
}

export default Sidebar;