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

  test('updates product list when user types in search', async () => {
    const user = userEvent.setup();

    renderWithProviders(<ShopPage />);

    const searchInput = screen.getByPlaceholderText('Search');

    await user.type(searchInput, 'shoulder');

    await waitFor(() => {
      expect(screen.getByText('Shoulder bag')).not.toBeNull();
    });
  });

  test('changes first product card after sorting by price', async () => {
    const user = userEvent.setup();

    renderWithProviders(<ShopPage />);

    const sortSelect = screen.getAllByRole('combobox')[0];

    await user.selectOptions(sortSelect, 'price');

    await waitFor(() => {
      expect(sortSelect.value).toBe('price');
    });

    const productCards = screen.getAllByTestId('product-card');
    const firstCard = productCards[0];

    expect(within(firstCard).getByText('Short shorts with straps')).not.toBeNull();
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