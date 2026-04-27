import Pagination from '../Pagination/Pagination';
import ProductsHeader from '../ProductsHeader/ProductsHeader';
import ProductGrid from '../ProductGrid/ProductGrid';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Showcase.module.css';

function Showcase({ catalog }) {
  const { display, search, filters, sort, pagination } = catalog;

  return (
    <section className={styles.shop}>
      <Sidebar search={search} filters={filters} />

      <div className={styles.productsWrapper}>
        <ProductsHeader count={display.totalCount} sort={sort} />

        <ProductGrid products={display.products} />

        <Pagination pagination={pagination} />
      </div>
    </section>
  );
}

export default Showcase;