import { useEffect, useState } from 'react';
import {
  DEFAULT_SORT_TYPE,
  INITIAL_FILTERS,
  ITEMS_PER_PAGE,
  SEARCH_DEBOUNCE_DELAY,
  SORT_OPTIONS,
} from '../constants';
import useAvailableFilters from './useAvailableFilters';
import useDebounce from './useDebounce';
import usePagination from './usePagination';
import useProductFilters from './useProductFilters';
import useSort from './useSort';

function useShopCatalog(products) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(
    INITIAL_FILTERS.selectedCategory
  );
  const [selectedMinPrice, setSelectedMinPrice] = useState(
    INITIAL_FILTERS.selectedMinPrice
  );
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(
    INITIAL_FILTERS.selectedMaxPrice
  );
  const [selectedColors, setSelectedColors] = useState(
    INITIAL_FILTERS.selectedColors
  );

  const [appliedFilters, setAppliedFilters] = useState(INITIAL_FILTERS);
  const [sortType, setSortType] = useState(DEFAULT_SORT_TYPE);
  const [currentPage, setCurrentPage] = useState(1);

  const debouncedSearchTerm = useDebounce(searchTerm, SEARCH_DEBOUNCE_DELAY);
  const availableFilterValues = useAvailableFilters(products);
  const filteredProducts = useProductFilters(
    products,
    debouncedSearchTerm,
    appliedFilters
  );
  const sortedProducts = useSort(filteredProducts, sortType);

  const { totalPages, paginatedItems } = usePagination(
    sortedProducts,
    currentPage,
    ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchTerm, appliedFilters, sortType]);

  const toggleColor = (color) => {
    setSelectedColors((prevSelectedColors) =>
      prevSelectedColors.includes(color)
        ? prevSelectedColors.filter((item) => item !== color)
        : [...prevSelectedColors, color]
    );
  };

  const applyFilters = () => {
    setAppliedFilters({
      selectedCategory,
      selectedMinPrice,
      selectedMaxPrice,
      selectedColors,
    });
  };

  return {
    display: {
      products: paginatedItems,
      totalCount: sortedProducts.length,
    },
    search: {
      searchTerm,
      setSearchTerm,
    },
    filters: {
      state: {
        selectedCategory,
        selectedMinPrice,
        selectedMaxPrice,
        selectedColors,
      },
      actions: {
        setSelectedCategory,
        setSelectedMinPrice,
        setSelectedMaxPrice,
        toggleColor,
        applyFilters,
      },
      available: availableFilterValues,
    },
    sort: {
      sortType,
      setSortType,
      options: SORT_OPTIONS,
    },
    pagination: {
      currentPage,
      totalPages,
      setCurrentPage,
    },
  };
}

export default useShopCatalog;