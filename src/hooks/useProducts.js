// Import required React hooks
import { useEffect, useState } from 'react';


// This hook fetches a list of products from an API and manages loading error states.
const useProducts = () => {
  // State to store fetched product data
  const [products, setProducts] = useState([]);

  // State to store any fetch error
  const [error, setError] = useState(null);

  // useEffect runs once when the component using this hook mounts
  useEffect(() => {
    // Fetch product data from DummyJSON API
    fetch('https://dummyjson.com/products')
      .then(res => res.json())                      // Parse JSON response
      .then(data => {
        setProducts(data.products);                 // Update product state with API response
        console.log(data.products);                 // Log products to console for debugging
      })
      .catch(err => setError(err));                  // If fetch fails, store error in state

  }, []);  // Empty dependency array ensures this runs only once when mounted

  // Return product and error state to be used in components
  return { products, error };
};

// Export the custom hook so it can be imported in other components
export default useProducts;
