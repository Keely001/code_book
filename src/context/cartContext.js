// Import necessary hooks and modules
import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers";

// Initial state for the cart context
const cartInitialState = {
  cartList: [],
  total: 0
};

// Create the Cart context
const CartContext = createContext(cartInitialState);

// Define the CartProvider component
export const CartProvider = ({ children }) => {
  // Use the useReducer hook to manage cart state
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  // Function to add a product to the cart
  function addToCart(product) {
    const updatedList = state.cartList.concat(product);
    const updatedTotal = state.total + product.price;

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedList,
        total: updatedTotal
      }
    });
  }

  // Function to remove a product from the cart
  function removeFromCart(product) {
    const updatedList = state.cartList.filter(item => item.id !== product.id);
    const updatedTotal = state.total - product.price;

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedList,
        total: updatedTotal
      }
    });
  }

  // Function to clear the cart
  function clearCart() {
    dispatch({
      type: "CLEAR_CART",
      payload: {
        products: [],
        total: 0
      }
    });
  }

  // Define the context value to be provided
  const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeFromCart,
    clearCart,
  };

  // Return the CartContext provider with the provided value
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the Cart context
export const useCart = () => {
  const context = useContext(CartContext);
  return context;
}
