import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import ShopPage from '../pages/ShopPage';
import Cart from '../components/Cart/Cart';
import { CartProvider } from '../context/CartContext';
import { FavoritesProvider } from '../context/FavoritesContext';
import { PROMO_CODE } from '../constants';

function renderWithProviders(ui) {
  return render(
    <BrowserRouter>
      <FavoritesProvider>
        <CartProvider>{ui}</CartProvider>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

describe('FASHIONEE integration tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
  });

  test('filters product cards when user types in search', async () => {
    const user = userEvent.setup();

    renderWithProviders(<ShopPage />);

    const searchInput = screen.getByPlaceholderText('Search');

    await user.type(searchInput, 'shoulder');

    await waitFor(() => {
      const productCards = screen.getAllByTestId('product-card');

      expect(productCards).toHaveLength(2);

      productCards.forEach((card) => {
        expect(card.textContent.toLowerCase()).toContain('shoulder');
      });
    });
  });

  test('changes first product card after sorting by price', async () => {
    const user = userEvent.setup();

    renderWithProviders(<ShopPage />);

    const productCardsBeforeSort = screen.getAllByTestId('product-card');

    expect(
      within(productCardsBeforeSort[0]).getByText('Textured turtleneck with zip')
    ).not.toBeNull();

    const sortSelect = screen.getAllByRole('combobox')[0];

    await user.selectOptions(sortSelect, 'price');

    await waitFor(() => {
      expect(sortSelect.value).toBe('price');
    });

    const productCardsAfterSort = screen.getAllByTestId('product-card');

    expect(
      within(productCardsAfterSort[0]).getByText('Short shorts with straps')
    ).not.toBeNull();
  });

  test('applies promo code and changes cart total', async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <>
        <ShopPage />
        <Cart />
      </>
    );

    const buyButtons = await screen.findAllByRole('button', { name: 'Buy' });

    await user.click(buyButtons[0]);

    await waitFor(() => {
      expect(screen.getByText('$67.99')).not.toBeNull();
    });

    const promoInput = screen.getByPlaceholderText('Enter promo code');

    await user.type(promoInput, PROMO_CODE);

    const promoButton = screen.getByAltText('arrow').closest('button');

    await user.click(promoButton);

    await waitFor(() => {
      expect(screen.getByText('Promo code applied')).not.toBeNull();
      expect(screen.getByText('10%')).not.toBeNull();
      expect(screen.getByText('$62.69')).not.toBeNull();
    });
  });
});