import { searchIcon } from '../../assets';
import styles from './Sidebar.module.css';

function Search({ search }) {
  return (
    <div className={styles.search}>
      <label>
        <input
          type="text"
          placeholder="Search"
          className={`input ${styles.searchRow}`}
          value={search.searchTerm}
          onChange={(e) => search.setSearchTerm(e.target.value)}
        />
        <img src={searchIcon} alt="search" className={styles.searchIcon} />
      </label>
    </div>
  );
}

export default Search;