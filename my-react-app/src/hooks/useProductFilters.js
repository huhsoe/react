import { useMemo } from 'react';

function useProductFilters(products, debouncedSearchTerm, appliedFilters) {
  return useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());

      const matchesCategory = appliedFilters.selectedCategory
        ? product.categories.includes(appliedFilters.selectedCategory)
        : true;

      const matchesMinPrice =
        appliedFilters.selectedMinPrice !== ''
          ? product.price >= Number(appliedFilters.selectedMinPrice)
          : true;

      const matchesMaxPrice =
        appliedFilters.selectedMaxPrice !== ''
          ? product.price <= Number(appliedFilters.selectedMaxPrice)
          : true;

      const matchesColors =
        appliedFilters.selectedColors.length > 0
          ? appliedFilters.selectedColors.includes(product.color)
          : true;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesColors
      );
    });
  }, [products, debouncedSearchTerm, appliedFilters]);
}

export default useProductFilters;