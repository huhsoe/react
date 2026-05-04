import { describe, expect, test } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import useProductFilters from '../useProductFilters';
import useSort from '../useSort';
import usePromoCode from '../usePromoCode';
import { PROMO_CODE, SORT_TYPES } from '../../constants';

const products = [
  {
    id: 1,
    name: 'Black bag',
    price: 100,
    categories: ['Accessories'],
    color: 'Black',
  },
  {
    id: 2,
    name: 'Red skirt',
    price: 50,
    categories: ['Women'],
    color: 'Red',
  },
  {
    id: 3,
    name: 'Blue shirt',
    price: 70,
    categories: ['Men'],
    color: 'Blue',
  },
];

describe('FASHIONEE business logic', () => {
  test('filters products by search, category, price and color', () => {
    const appliedFilters = {
      selectedCategory: 'Women',
      selectedMinPrice: 30,
      selectedMaxPrice: 80,
      selectedColors: ['Red'],
    };

    const { result } = renderHook(() =>
      useProductFilters(products, 'skirt', appliedFilters)
    );

    expect(result.current).toEqual([
      {
        id: 2,
        name: 'Red skirt',
        price: 50,
        categories: ['Women'],
        color: 'Red',
      },
    ]);
  });

  test('sorts products by price from cheapest to most expensive', () => {
    const { result } = renderHook(() => useSort(products, SORT_TYPES.PRICE));

    expect(result.current.map((product) => product.id)).toEqual([2, 3, 1]);
  });

  test('sorts products by name alphabetically', () => {
    const { result } = renderHook(() => useSort(products, SORT_TYPES.NAME));

    expect(result.current.map((product) => product.name)).toEqual([
      'Black bag',
      'Blue shirt',
      'Red skirt',
    ]);
  });

  test('returns products unchanged for relevance sort', () => {
    const { result } = renderHook(() =>
      useSort(products, SORT_TYPES.RELEVANCE)
    );

    expect(result.current.map((product) => product.id)).toEqual([1, 2, 3]);
  });

  test('does not mutate the original products array during sorting', () => {
    const originalProducts = [...products];

    renderHook(() => useSort(products, SORT_TYPES.PRICE));

    expect(products).toEqual(originalProducts);
  });

  test('applies promo code and calculates correct total', () => {
    const cartProducts = [
      {
        id: 1,
        name: 'Black bag',
        price: 100,
        quantity: 2,
      },
    ];

    const { result } = renderHook(() => usePromoCode(cartProducts));

    expect(result.current.orderPrice).toBe(200);
    expect(result.current.delivery).toBe(15);
    expect(result.current.total).toBe(215);

    act(() => {
      result.current.setPromoCode(PROMO_CODE);
    });

    act(() => {
      result.current.handleApplyPromoCode();
    });

    expect(result.current.isPromoApplied).toBe(true);
    expect(result.current.total).toBe(195);
  });

  test('rejects invalid promo code', () => {
    const cartProducts = [
      {
        id: 1,
        name: 'Black bag',
        price: 100,
        quantity: 1,
      },
    ];

    const { result } = renderHook(() => usePromoCode(cartProducts));

    act(() => {
      result.current.setPromoCode('wrongcode');
    });

    act(() => {
      result.current.handleApplyPromoCode();
    });

    expect(result.current.isPromoApplied).toBe(false);
    expect(result.current.promoMessage).toBe('This promo code does not exist');
    expect(result.current.total).toBe(115);
  });

  test('promo code is case-insensitive and trims whitespace', () => {
    const cartProducts = [
      {
        id: 1,
        name: 'Black bag',
        price: 100,
        quantity: 1,
      },
    ];

    const { result } = renderHook(() => usePromoCode(cartProducts));

    act(() => {
      result.current.setPromoCode(' ILoveReact ');
    });

    act(() => {
      result.current.handleApplyPromoCode();
    });

    expect(result.current.isPromoApplied).toBe(true);
  });

  test('returns zero delivery and total for empty cart', () => {
    const { result } = renderHook(() => usePromoCode([]));

    expect(result.current.orderPrice).toBe(0);
    expect(result.current.delivery).toBe(0);
    expect(result.current.total).toBe(0);
  });
});