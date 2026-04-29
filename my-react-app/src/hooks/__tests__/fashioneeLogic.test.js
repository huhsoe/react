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
});