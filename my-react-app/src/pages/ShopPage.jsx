import data from '../data/products.json';
import Showcase from '../components/Showcase/Showcase';
import useShopCatalog from '../hooks/useShopCatalog';

function ShopPage() {
  const products = data.products;
  const catalog = useShopCatalog(products);

  return <Showcase catalog={catalog} />;
}

export default ShopPage;