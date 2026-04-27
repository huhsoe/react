import { useMemo } from 'react';

function usePagination(items, currentPage, itemsPerPage) {
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return items.slice(startIndex, endIndex);
  }, [items, currentPage, itemsPerPage]);

  return {
    totalPages,
    paginatedItems,
  };
}

export default usePagination;