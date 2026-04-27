import { useMemo } from 'react';
import { SORT_TYPES } from '../constants';

function useSort(products, sortType) {
  return useMemo(() => {
    const copiedProducts = [...products];

    if (sortType === SORT_TYPES.NAME) {
      return copiedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortType === SORT_TYPES.PRICE) {
      return copiedProducts.sort((a, b) => a.price - b.price);
    }

    return copiedProducts;
  }, [products, sortType]);
}

export default useSort;