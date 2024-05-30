// Import necessary hooks and modules
import { createContext, useReducer, useContext } from "react";
import { filterReducer } from "../reducers";

// Initial state for the filter context
const filterInitialState = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  ratings: null
};

// Create the Filter context
export const FilterContext = createContext(filterInitialState);

// Define the FilterProvider component
export const FilterProvider = ({ children }) => {
  // Use the useReducer hook to manage filter state
  const [state, dispatch] = useReducer(filterReducer, filterInitialState);

  // Function to initialize the product list
  function initialProductList(products) {
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        products
      }
    });
  }

  // Function to filter products by best seller status
  function bestSeller(products) {
    return state.bestSellerOnly ? products.filter(product => product.best_seller === true) : products;
  }

  // Function to filter products by stock status
  function inStock(products) {
    return state.onlyInStock ? products.filter(product => product.in_stock === true) : products;
  }

  // Function to sort products by price
  function sort(products) {
    if (state.sortBy === "lowtohigh") {
      return products.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (state.sortBy === "hightolow") {
      return products.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return products;
  }

  // Function to filter products by rating
  function rating(products) {
    if (state.ratings === "4STARSABOVE") {
      return products.filter(product => product.rating >= 4);
    }
    if (state.ratings === "3STARSABOVE") {
      return products.filter(product => product.rating >= 3);
    }
    if (state.ratings === "2STARSABOVE") {
      return products.filter(product => product.rating >= 2);
    }
    if (state.ratings === "1STARSABOVE") {
      return products.filter(product => product.rating >= 1);
    }
    return products;
  }

  // Apply all filters to the product list
  const filteredProductList = rating(sort(inStock(bestSeller(state.productList))));

  // Define the context value to be provided
  const value = {
    state,
    dispatch,
    products: filteredProductList,
    initialProductList
  };

  // Return the FilterContext provider with the provided value
  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
}

// Custom hook to use the Filter context
export const useFilter = () => useContext(FilterContext);
