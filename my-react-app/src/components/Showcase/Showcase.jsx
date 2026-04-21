import Sidebar from '../Sidebar/Sidebar';
import ProductsHeader from '../ProductsHeader/ProductsHeader';
import ProductGrid from '../ProductGrid/ProductGrid';
import Pagination from '../Pagination/Pagination';

function Showcase({
  products,
  totalCount,
  favorites,
  toggleFavorite,
  cart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  searchTerm,
  setSearchTerm,
  availableCategories,
  availableColors,
  minAvailablePrice,
  maxAvailablePrice,
  selectedCategory,
  setSelectedCategory,
  selectedMinPrice,
  setSelectedMinPrice,
  selectedMaxPrice,
  setSelectedMaxPrice,
  selectedColors,
  toggleColor,
  applyFilters,
}) {
  return (
    <div className="shop">
      <Sidebar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        availableCategories={availableCategories}
        availableColors={availableColors}
        minAvailablePrice={minAvailablePrice}
        maxAvailablePrice={maxAvailablePrice}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedMinPrice={selectedMinPrice}
        setSelectedMinPrice={setSelectedMinPrice}
        selectedMaxPrice={selectedMaxPrice}
        setSelectedMaxPrice={setSelectedMaxPrice}
        selectedColors={selectedColors}
        toggleColor={toggleColor}
        applyFilters={applyFilters}
      />

      <div className="products-wrapper">
        <ProductsHeader count={totalCount} />
        <ProductGrid
          products={products}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          cart={cart}
          addToCart={addToCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
        <Pagination />
      </div>
    </div>
  );
}

export default Showcase;