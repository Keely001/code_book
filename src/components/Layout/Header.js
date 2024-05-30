// Import necessary hooks and components
import { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { Search } from '../Sections/Search';
import { DropdownLoggedOut, DropdownLoggedIn } from '../index';
import { useCart } from '../../context';

export const Header = () => {
  // State to manage dark mode, search section, and dropdown visibility
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  const [searchSection, setSearchSection] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  // Get the cart list from the useCart hook
  const { cartList } = useCart();
  // Get the token from session storage
  const token = JSON.parse(sessionStorage.getItem("token"));

  // Update dark mode in local storage and document class list
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Return the JSX structure of the Header component
  return (
    <header>      
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          {/* Logo and site name */}
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-10" alt="e_CodeBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">e_CodeBook</span>
          </Link>
          {/* Navigation icons */}
          <div className="flex items-center relative">
            {/* Dark mode toggle */}
            <span onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
            {/* Search section toggle */}
            <span onClick={() => setSearchSection(!searchSection)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
            {/* Cart icon with item count */}
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full">{cartList.length}</span>
              </span>                    
            </Link>
            {/* User dropdown */}
            <span onClick={() => setDropdown(!dropdown)} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
            {/* Render appropriate dropdown based on token */}
            {dropdown && (token ? <DropdownLoggedIn setDropdown={setDropdown} /> : <DropdownLoggedOut setDropdown={setDropdown} />)}
          </div>
        </div>
      </nav>
      {/* Render search section if searchSection is true */}
      {searchSection && <Search searchSection={setSearchSection} />}
    </header>
  )
}
