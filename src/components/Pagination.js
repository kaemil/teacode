const Pagination = ({ page, handlePageDown, handlePageUp }) => (
  <div className="contact--pagination">
    <button
      className="contact--pagination-page-switch"
      onClick={handlePageDown}
    >
      &lt;
    </button>
    <div className="contact--pagination-page">{page}</div>
    <button className="contact--pagination-page-switch" onClick={handlePageUp}>
      &gt;
    </button>
  </div>
);

export default Pagination;
