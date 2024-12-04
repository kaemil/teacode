import { useState } from 'react';

import { DATA_PER_PAGE } from '../consts';

const usePagination = ({ users }) => {
  const [page, setPage] = useState(1);

  /**
   * Change page down
   */
  const handlePageDown = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  /**
   * Change page up
   */
  const handlePageUp = () => {
    if (page < Math.round(users.length / DATA_PER_PAGE)) {
      setPage((prev) => prev + 1);
    }
  };

  /**
   * Slice date for page
   */
  const sliceDataPerPage = (
    data = [],
    page = 1,
    dataPerPage = DATA_PER_PAGE
  ) => {
    const startIndex = (page - 1) * dataPerPage;

    return data?.slice(startIndex, startIndex + dataPerPage);
  };

  return { handlePageDown, handlePageUp, sliceDataPerPage, page };
};

export default usePagination;
