// Import necessary hooks and modules
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

// Component to display detailed view of a single product
const ProductDetail = () => {
  // Get product ID from the URL parameters
  const { id } = useParams();

  // Local state for product details and error handling
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  // Redux dispatch function
  const dispatch = useDispatch();

  // Fetch product details when component mounts or when 'id' changes
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))  // Set fetched product data to state
      .catch(err => setError(err));    // Set error if fetch fails
  }, [id]); // Dependency array to re-run when 'id' changes

  // If there’s an error fetching product data
  if (error) return <div className="p-4 text-red-600">Product not found.</div>;

  // Show loading text while fetching product data
  if (!product) return <div className="p-4">Loading...</div>;

  // Render product details
  return (
    <div className="p-4 grid md:grid-cols-2 gap-4 mb-10 pb-6">
      {/* Product image */}
      <img 
        src={product.thumbnail} 
        alt={product.title} 
        className="rounded-xl w-full h-96 object-cover" 
      />

      {/* Product details section */}
      <div>
        <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-indigo-600 text-2xl mb-4">${product.price}</p>

        {/* Add to Cart button */}
        <button 
          onClick={() => dispatch(addToCart(product))} 
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// Export the component
export default ProductDetail;
