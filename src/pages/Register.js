// Import necessary hooks and modules
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../services";
import { UseTitle } from "../Hooks/UseTitle";

// Define the Register functional component
export const Register = () => {
  // Set the document title using a custom hook
  UseTitle("Register");
  // Initialize the navigate function from useNavigate hook
  const navigate = useNavigate();

  // Handle the register form submission
  async function handleRegister(event) {
    event.preventDefault();
    // Create an object with the input values
    const authDetails = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value
    };

    // Call the register service with the authDetails
    const data = await register(authDetails);
    // If registration is successful, navigate to the products page, otherwise show an error message
    data.accessToken ? navigate("/products") : toast.error(data);
  }

  // Return the JSX structure of the Register component
  return (
    <main>
      <section>
        {/* Header section with title */}
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Register</p>
      </section>
      {/* Registration form */}
      <form onSubmit={handleRegister}>
        <div className="mb-6">
          {/* Name input field */}
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
          <input 
            type="text" 
            id="name" 
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
            placeholder="Shubham Sarda" 
            required 
            autoComplete="off" 
          />
        </div>
        <div className="mb-6">
          {/* Email input field */}
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
          <input 
            type="email" 
            id="email" 
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
            placeholder="shubham@example.com" 
            required 
            autoComplete="off" 
          />
        </div>
        <div className="mb-6">
          {/* Password input field */}
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
          <input 
            type="password" 
            id="password" 
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
            required 
            minLength="7" 
          />
        </div>
        {/* Submit button */}
        <button 
          type="submit" 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register
        </button>
      </form>
    </main>
  );
}
