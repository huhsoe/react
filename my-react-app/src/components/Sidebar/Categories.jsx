import styles from './Sidebar.module.css';

function Categories({ filters }) {
  const { state, actions, available } = filters;

  return (
    <div className={styles.sidebarItem}>
      <div className={styles.sidebarTitle}>Categories</div>

      <div className={styles.sidebarContent}>
        <ul className={styles.categoriesList}>
          <li
            className={`${styles.category} ${
              state.selectedCategory === '' ? styles.activeCategory : ''
            }`}
            onClick={() => actions.setSelectedCategory('')}
          >
            All
          </li>

          {available.categories.map((category) => (
            <li
              key={category}
              className={`${styles.category} ${
                state.selectedCategory === category ? styles.activeCategory : ''
              }`}
              onClick={() => actions.setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Categories;