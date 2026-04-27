import { sortIcon } from '../../assets';
import styles from './Sort.module.css';

function Sort({ sort }) {
  return (
    <div className={styles.sort}>
      <select
        className={styles.sortSelect}
        value={sort.sortType}
        onChange={(e) => sort.setSortType(e.target.value)}
      >
        {sort.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <img src={sortIcon} alt="sort icon" className={styles.sortIcon} />
    </div>
  );
}

export default Sort;