import { NavLink, Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';

function MainLayout() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.logo}>My Blog</h1>

        <nav className={styles.nav}>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Posts
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            About Author
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Feedback
          </NavLink>
        </nav>
      </header>

      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;