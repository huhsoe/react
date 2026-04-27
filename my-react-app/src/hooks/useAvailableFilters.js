import { useMemo } from 'react';

function useAvailableFilters(products) {
  return useMemo(() => {
    const categories = [...new Set(products.flatMap((product) => product.categories))];
    const colors = [...new Set(products.map((product) => product.color))];
    const minPrice = Math.min(...products.map((product) => product.price));
    const maxPrice = Math.max(...products.map((product) => product.price));

    return {
      categories,
      colors,
      minPrice,
      maxPrice,
    };
  }, [products]);
}

export default useAvailableFilters;