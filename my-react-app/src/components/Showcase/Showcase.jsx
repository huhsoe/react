import Sidebar from '../Sidebar/Sidebar';
import ProductsHeader from '../ProductsHeader/ProductsHeader';
import ProductGrid from '../ProductGrid/ProductGrid';
import Pagination from '../Pagination/Pagination';
import data from '../../data/products.json';

function Showcase() {
  const products = data.products;

  return (
    <div className="shop">
      <Sidebar />

      <div className="products-wrapper">
        <ProductsHeader count={products.length} />
        <ProductGrid products={products} />
        <Pagination />
      </div>
    </div>
  );
}

export default Showcase;