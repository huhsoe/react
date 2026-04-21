import { sortIcon } from '../../assets';
import styles from './Sort.module.css';

function Sort({ sortType, setSortType }) {
  return (
    <div className={styles.sort}>
      <select
        className={styles.sortSelect}
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value="relevance">By relevance</option>
        <option value="name">By name</option>
        <option value="price">By price</option>
      </select>

      <img src={sortIcon} alt="sort icon" className={styles.sortIcon} />
    </div>
  );
}

export default Sort;