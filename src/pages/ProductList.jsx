// Import necessary hooks and components
import useProducts from '../hooks/useProducts';
import ProductItem from '../components/ProductItem';
import { useState } from 'react';

// Component to display a list of products with a search bar
const ProductList = () => {
  // Custom hook to fetch product data and error state
  const { products, error } = useProducts();

  // Local state to manage search input value
  const [search, setSearch] = useState('');

  // If there's an error while fetching products, show error message
  if (error) return <div className="p-4 text-red-600">Error loading products.</div>;

  return (
    <div className="p-4">
      {/* Search bar */}
      <div className='flex'>  
        <input 
          type="text" 
          placeholder="Search..." 
          value={search}
          onChange={e => setSearch(e.target.value)} 
          className="border p-2 w-full mb-4 rounded-xl"
        />
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Filter products by search query (case insensitive) */}
        {products
          .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
          .map(product => (
            <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

// Export the component
export default ProductList;
