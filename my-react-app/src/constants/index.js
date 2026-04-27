export const ROUTES = {
  ROOT: '/',
  SHOP: '/shop',
  CART: '/cart',
};

export const PAGE_NAMES = {
  HOME: 'Home',
  SHOP: 'Shop',
  CART: 'Cart',
};

export const LS_KEYS = {
  FAVORITES: 'favorites',
  CART: 'cart',
};

export const SORT_TYPES = {
  RELEVANCE: 'relevance',
  NAME: 'name',
  PRICE: 'price',
};

export const SORT_OPTIONS = [
  { value: SORT_TYPES.RELEVANCE, label: 'By relevance' },
  { value: SORT_TYPES.NAME, label: 'By name' },
  { value: SORT_TYPES.PRICE, label: 'By price' },
];

export const DEFAULT_SORT_TYPE = SORT_TYPES.RELEVANCE;

export const ITEMS_PER_PAGE = 12;
export const SEARCH_DEBOUNCE_DELAY = 400;
export const REVIEWED_PRODUCTS_LIMIT = 3;

export const PROMO_CODE = 'ilovereact';
export const PROMO_DISCOUNT_PERCENT = 10;
export const PROMO_DISCOUNT_RATE = PROMO_DISCOUNT_PERCENT / 100;
export const DELIVERY_PRICE = 15;

export const INITIAL_FILTERS = {
  selectedCategory: '',
  selectedMinPrice: '',
  selectedMaxPrice: '',
  selectedColors: [],
};