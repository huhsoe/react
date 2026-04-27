import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { PAGE_NAMES, ROUTES } from '../constants';

function usePageMeta() {
  const { pathname } = useLocation();

  return useMemo(() => {
    if (pathname === ROUTES.CART) {
      return {
        title: PAGE_NAMES.CART,
        breadcrumbs: [
          { label: PAGE_NAMES.HOME, to: ROUTES.ROOT },
          { label: PAGE_NAMES.SHOP, to: ROUTES.SHOP },
          { label: PAGE_NAMES.CART, to: ROUTES.CART },
        ],
      };
    }

    return {
      title: PAGE_NAMES.SHOP,
      breadcrumbs: [
        { label: PAGE_NAMES.HOME, to: ROUTES.ROOT },
        { label: PAGE_NAMES.SHOP, to: ROUTES.SHOP },
      ],
    };
  }, [pathname]);
}

export default usePageMeta;