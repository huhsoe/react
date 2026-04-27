import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { LS_KEYS } from '../constants';

const FavoritesContext = createContext(null);

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem(LS_KEYS.FAVORITES);
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem(LS_KEYS.FAVORITES, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  const value = useMemo(() => {
    return {
      favorites,
      toggleFavorite,
      favoritesCount: favorites.length,
    };
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used within FavoritesProvider');
  }

  return context;
}

export { FavoritesProvider, useFavorites };