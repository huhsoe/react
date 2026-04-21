import { leftPaginationArrowIcon, rightPaginationArrowIcon } from '../../assets';

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
    <div className="pagination">
      <div
        className="button-left"
        onClick={goToPreviousPage}
        style={{ cursor: currentPage === 1 ? 'default' : 'pointer', opacity: currentPage === 1 ? 0.5 : 1 }}
      >
        <img src={leftPaginationArrowIcon} alt="left-arrow" />
      </div>

      <div className="pages">
        {pages.map((page) => (
          <div
            key={page}
            className={`page ${currentPage === page ? 'active' : ''}`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </div>
        ))}
      </div>

      <div
        className="button-right"
        onClick={goToNextPage}
        style={{ cursor: currentPage === totalPages ? 'default' : 'pointer', opacity: currentPage === totalPages ? 0.5 : 1 }}
      >
        <img src={rightPaginationArrowIcon} alt="right-arrow" />
      </div>
    </div>
  );
}

export default Pagination;