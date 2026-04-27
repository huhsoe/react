import styles from './Sidebar.module.css';

function Colors({ filters }) {
  const { state, actions, available } = filters;

  return (
    <div className={styles.sidebarItem}>
      <div className={styles.sidebarTitle}>Colors</div>

      <div className={styles.sidebarContent}>
        <div className={styles.colors}>
          {available.colors.map((color) => {
            const id = color.toLowerCase();

            return (
              <div className={styles.color} key={color}>
                <input
                  type="checkbox"
                  className={styles.colorCheckbox}
                  id={id}
                  name={id}
                  checked={state.selectedColors.includes(color)}
                  onChange={() => actions.toggleColor(color)}
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
  );
}

export default Colors;