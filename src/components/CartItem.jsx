// Import necessary hooks and actions from Redux
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, decreaseQuantity } from '../redux/cartSlice';

// CartItem component receives an 'item' prop representing a product in the cart
const CartItem = ({ item }) => {
  // Initialize the Redux dispatch function
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-between items-center bg-red-100 p-4 rounded-xl mb-4 shadow-xl w-full">
      {/* Display item image, title, price, and quantity */}
      <div className="flex items-center gap-4 ">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <div>
          <h3 className="font-bold text-lg">{item.title}</h3>
          <p className="text-gray-700">${item.price} × {item.quantity}</p>
        </div>

        {/* Quantity Increase Button */}
        <button
          onClick={() => dispatch(addToCart(item))} // Dispatch addToCart action
          className="px-3 py-1 bg-green-500 text-white rounded-lg"
        >
          +
        </button>

        {/* Quantity Decrease Button */}
        <button
          onClick={() => dispatch(decreaseQuantity(item))} // Dispatch decreaseQuantity action
          className="px-3 py-1 bg-yellow-500 text-white rounded-lg"
        >
          -
        </button>
      </div>

      {/* Remove Item from Cart Button */}
      <button
        onClick={() => dispatch(removeFromCart(item.id))} // Dispatch removeFromCart action
        className="text-red-600 pl-4 pr-4 py-2 border-2 border-red-600 rounded-xl hover:bg-red-600 hover:text-white transition  m-2"
      >
        Remove
      </button>
    </div>
  );
};

// Export the CartItem component for use in other parts of the app
export default CartItem;
