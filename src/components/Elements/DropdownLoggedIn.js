// Import necessary hooks and modules
import { Link, useNavigate } from "react-router-dom";
import { getUser, logout } from "../../services";
import { useEffect, useState } from "react";

// Define the DropdownLoggedIn functional component
export const DropdownLoggedIn = ({ setDropdown }) => {
  // State to manage user information
  const [user, setUser] = useState({});

  // Initialize the navigate function from useNavigate hook
  const navigate = useNavigate();

  // Fetch user information when the component mounts
  useEffect(() => {
    async function fetchData() {
      const data = await getUser();
      data.email ? setUser(data) : handleLogOut();
    }
    fetchData();
  }, []);

  // Handle user logout
  function handleLogOut() {
    logout();
    setDropdown(false);
    navigate("/");
  }

  // Return the JSX structure of the DropdownLoggedIn component
  return (
    <div id="dropdownAvatar" className="select-none absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
      {/* Display user name */}
      <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div className="font-medium truncate">{user.name}</div>
      </div>
      {/* Links to other pages */}
      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
        <li>
          <Link to="/products" onClick={() => setDropdown(false)} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
        </li>
        <li>
          <Link to="/dashboard" onClick={() => setDropdown(false)} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
        </li>
      </ul>
      {/* Logout option */}
      <div className="py-1">
        <span onClick={handleLogOut} className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</span>
      </div>
    </div>
  );
}
