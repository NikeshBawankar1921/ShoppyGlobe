// Import createSlice from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Create a cart slice to manage cart state in the Redux store
export const cartSlice = createSlice({
  name: 'cart',               // Name of this slice in the store
  initialState: [],           // Initial state: an empty array representing an empty cart

  // Reducers define actions and how state should change when they're dispatched
  reducers: {
    // Action to add a product to the cart
    addToCart: (state, action) => {
      // Check if item already exists in cart
      const item = state.find(p => p.id === action.payload.id);
      if (item) {
        // If exists, increment its quantity
        item.quantity += 1;
      } else {
        // If not, add new product with quantity = 1
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    // Action to remove a product from the cart by its id
    removeFromCart: (state, action) => 
      state.filter(p => p.id !== action.payload),

    // Action to decrease the quantity of a product in the cart
    decreaseQuantity: (state, action) => {
      // Find the product in the cart
      const item = state.find(p => p.id === action.payload.id);
      if (item) {
        // If quantity > 1, decrease it by 1
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // If quantity is 1, remove it from the cart
          return state.filter(p => p.id !== action.payload.id);
        }
      }
    },
  },
});

// Export actions to use in components
export const { addToCart, removeFromCart, decreaseQuantity } = cartSlice.actions;

// Export reducer to include in the Redux store
export default cartSlice.reducer;
