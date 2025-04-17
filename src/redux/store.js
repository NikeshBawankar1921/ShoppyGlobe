// Import configureStore to create a Redux store
import { configureStore } from '@reduxjs/toolkit';
// Import cartReducer we created in cartSlice
import cartReducer from './cartSlice';

// Create the Redux store and add cartReducer to it
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});