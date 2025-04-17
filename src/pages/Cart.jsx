// Import required hooks and components
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';

// Cart page component
const Cart = () => {

  // Initialize navigate hook for programmatic routing
  const navigate = useNavigate();

  // Access the cart state from Redux store
  const cart = useSelector(state => state.cart);

  // If cart is empty, show this empty cart message with image and a "Go Back" button
  if (!cart.length) return (
    <div className="p-4 flex flex-col items-center mb-8">
      <h1 className="font-mono stroke-yellow-300 border-1 rounded-xl pl-2 pr-2 border-b-amber-700 border-l-amber-600 border-t-blue-700 border-r-blue-700">
        Your cart is empty !
      </h1>
      <img 
        src="https://cdni.iconscout.com/illustration/premium/thumb/your-cart-is-empty-2161427-1815069.png"
        className="w-auto sm:w-80"
        alt="empty-cart"
      />
      <button 
        className='border-2 m-4 pl-2 pr-2 rounded-xl cursor-pointer hover:bg-green-200'
        onClick={() => navigate(`/`)}
      >
        Go Back
      </button>
    </div>
  );

  // If cart has items, render the cart items list
  return (
    <>
      {/* Page title */}
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {/* Cart items container */}
      <div className="p-4 w-screen flex flex-wrap m-2 sm:flex-nowrap sm:flex-col sm:w-fit">
        {/* Loop through cart items and render each as a CartItem component */}
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

// Export the Cart component for use in routing
export default Cart;
