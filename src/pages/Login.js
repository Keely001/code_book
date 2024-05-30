// Import necessary hooks and modules
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../services";
import { UseTitle } from "../Hooks/UseTitle";

// Define the Login functional component
export const Login = () => {
  // Set the document title using a custom hook
  UseTitle("Login");

  // References for the email and password input fields
  const email = useRef();
  const password = useRef();
  // Initialize the navigate function from useNavigate hook
  const navigate = useNavigate();

  // Handle the login form submission
  async function handleLogin(event) {
    event.preventDefault();
    // Create an object with the input values
    const authDetails = {
      email: email.current.value,
      password: password.current.value,
    };
    // Call the login service with the authDetails
    const data = await login(authDetails);
    // If login is successful, navigate to the products page, otherwise show an error message
    data.accessToken ? navigate("/products") : toast.error(data);
  }

  // Return the JSX structure of the Login component
  return (
    <main>
      <section>
        {/* Header section with title */}
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Login</p>
      </section>        
      {/* Login form */}
      <form onSubmit={handleLogin}>
        <div className="mb-6">
          {/* Email input field */}
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
          <input 
            ref={email} 
            type="email" 
            id="email" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="shubham@example.com" 
            required 
            autoComplete="off" 
          />
        </div>
        <div className="mb-6">
          {/* Password input field */}
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
          <input 
            ref={password} 
            type="password" 
            id="password" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            required 
          />
        </div>
        {/* Submit button */}
        <button 
          type="submit" 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Log In
        </button>
      </form>
    </main>
  );
}
