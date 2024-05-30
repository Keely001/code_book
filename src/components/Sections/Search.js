// Import necessary hooks
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

// Define the Search functional component
export const Search = ({ setSearchSection }) => {
  // Initialize the navigate function from useNavigate hook
  const navigate = useNavigate();
  // Create a reference for the search input field
  const searchRef = useRef();

  // Handle the search form submission
  const handleSearch = (event) => {
    event.preventDefault();
    // Close the search section
    setSearchSection(false);
    // Navigate to the products page with the search query
    navigate(`/products?q=${searchRef.current.value}`);
  }

  // Return the JSX structure of the Search component
  return (
    <div className="mx-auto max-w-screen-xl p-2 my-5">
      {/* Search form */}
      <form onSubmit={handleSearch} className="flex items-center">
        <div className="relative w-full">
          {/* Search icon */}
          <span className="bi bi-search flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></span>
          {/* Search input field */}
          <input 
            ref={searchRef} 
            name="search" 
            type="text" 
            id="simple-search" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Search" 
            autoComplete="off" 
            required 
          />
        </div>
        {/* Submit button with search icon */}
        <button 
          type="submit" 
          className="bi bi-search py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        </button>
      </form>
    </div>
  )
}
