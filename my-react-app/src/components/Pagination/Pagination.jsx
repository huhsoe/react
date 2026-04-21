import {
  leftPaginationArrowIcon,
  rightPaginationArrowIcon,
} from '../../assets';
import styles from './Pagination.module.css';

function Pagination({ currentPage, totalPages, setCurrentPage }) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <div
        className={`${styles.buttonLeft} ${
          currentPage === 1 ? styles.disabled : styles.clickable
        }`}
        onClick={goToPreviousPage}
      >
        <img src={leftPaginationArrowIcon} alt="left-arrow" />
      </div>

      <div className={styles.pages}>
        {pages.map((page) => (
          <div
            key={page}
            className={`${styles.page} ${currentPage === page ? styles.active : ''}`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </div>
        ))}
      </div>

      <div
        className={`${styles.buttonRight} ${
          currentPage === totalPages ? styles.disabled : styles.clickable
        }`}
        onClick={goToNextPage}
      >
        <img src={rightPaginationArrowIcon} alt="right-arrow" />
      </div>
    </div>
  );
}

export default Pagination;