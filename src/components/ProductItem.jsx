// Import required hooks and actions from react-redux and react-router-dom
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

// ProductItem component definition
// Receives a 'product' object as a prop
const ProductItem = ({ product }) => {
  const dispatch = useDispatch();  // Initialize dispatch function for Redux actions
  const navigate = useNavigate();  // Hook to programmatically navigate to routes

  return (
    <>
      {/* Product card container */}
      <div className="bg-white p-4 rounded-xl shadow-xl flex flex-col mb-10">

        {/* Product image */}
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className="rounded-xl h-fit object-cover mb-4 border-2"
        />

        {/* Product title */}
        <h2 className="text-xl font-bold mb-2">{product.title}</h2>

        {/* Product price */}
        <p className="text-gray-600 mb-4">${product.price}</p>

        {/* Action buttons: Add to Cart and View Details */}
        <div className="flex gap-2 mt-auto">
          
          {/* Add to cart button — dispatches addToCart action */}
          <button 
            onClick={() => dispatch(addToCart(product))} 
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            <i className="fa-solid fa-cart-plus"></i> ADD
          </button>

          {/* Details button — navigates to individual product page */}
          <button 
            onClick={() => navigate(`/product/${product.id}`)} 
            className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg cursor-pointer"
          >
            Details
          </button>
        </div>

      </div>
    </>
  );
};

// Export the ProductItem component for use in other parts of the app
export default ProductItem;
