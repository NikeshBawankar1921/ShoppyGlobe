// Import custom hook and components
import useProducts from '../hooks/useProducts';
import ProductItem from '../components/ProductItem';
import { useState, useMemo } from 'react';

// Component to filter and display products based on category and search input
const FilterP = ({ categorys }) => {
  // Fetch products using custom hook
  const { products, error } = useProducts();

  // State to hold the current search input value
  const [search, setSearch] = useState('');

  // Filter products based on search input and selected category
  const filteredProducts = useMemo(() => 
    products.filter(product => {
      // Check if product title matches the search text
      const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());

      // Check if product category matches the passed category (if any)
      const matchesCategory = categorys
        ? product.category.toLowerCase().includes(categorys.toLowerCase())
        : true;

      // Return true only if both conditions are satisfied
      return matchesSearch && matchesCategory;
    }), 
    [products, search, categorys] // Dependencies for recalculating the filtered products
  );

  // If error while fetching products, show error message
  if (error) return <div className="p-4 text-red-600">Error loading products.</div>;

  // Render search bar and filtered product list
  return (
    <div className="p-4">

      {/* Search input */}
      <div className='flex'>
        <input 
          type="text" 
          placeholder="Search..." 
          value={search} 
          onChange={e => setSearch(e.target.value)} 
          className="border p-2 w-full mb-4 rounded-xl" 
        />
      </div>

      {/* Product items grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Map through filtered products and render each product */}
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
};

// Export the FilterP component
export default FilterP;
