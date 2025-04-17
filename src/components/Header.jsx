// Import required modules from react-router-dom and react-redux
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Header component definition
const Header = () => {
  // Access the cart state from Redux store
  const cart = useSelector(state => state.cart);

  // Hook to programmatically navigate to different routes
  const navigate = useNavigate();

  // Handle the category menu change event
  const handleMenuChange = (e) => {
    const value = e.target.value;
    if (value !== '') navigate(value);  // Navigate to the selected category page
  };

  return (
    <>
      {/* Main header container */}
      <div className="flex flex-wrap justify-between items-center p-4 text-white backdrop-blur-2xl sticky top-0 bg-gray-900 w-screen">
        
        {/* Brand name linking to Home */}
        <Link to="/" className="text-2xl font-bold text-white p-2">ShoppyGlobe</Link>

        {/* Right side elements: category dropdown & cart icon */}
        <div className="flex items-center gap-4">
          
          {/* Category navigation dropdown */}
          <select 
            onChange={handleMenuChange}
            className="bg-gray-300 border-2 border-amber-900 rounded-2xl pl-2 pr-2 text-black"
          >
            {/* Dropdown options for product categories */}
            <option value="/">Home</option>
            <option value="/category/beauty">beauty</option>
            <option value="/category/fragrances">fragrances</option>
            <option value="/category/furniture">furniture</option>
            <option value="/category/groceries">groceries</option>
          </select>

          {/* Cart icon with item count */}
          <Link 
            to="/cart" 
            className="text-lg text-white border-2 pr-2 pl-2 rounded-xl"
          >
            <i className="fa-solid fa-cart-plus">
              &nbsp; { cart.length }
            </i>
          </Link>

        </div>
      </div>
    </>
  );
};

// Export Header component for use in other parts of the application
export default Header;
