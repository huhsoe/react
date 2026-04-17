import { leftPaginationArrowIcon, rightPaginationArrowIcon } from '../../assets';

function Pagination() {
  return (
    <div className="pagination">
      <div className="button-left">
        <img src={leftPaginationArrowIcon} alt="left-arrow" />
      </div>

      <div className="pages">
        <div className="page active">1</div>
        <div className="page">2</div>
        <div className="page">3</div>
      </div>

      <img src={rightPaginationArrowIcon} className="button-right" alt="right-arrow" />
    </div>
  );
}

export default Pagination;