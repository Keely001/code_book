// Import the Link component from react-router-dom for navigation
import { Link } from "react-router-dom"

// Define the OrderSuccess functional component
export const OrderSuccess = ({ data }) => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700 rounded">
        <div className="my-5">
            {/* Display a check-circle icon indicating success */}
            <p className="bi bi-check-circle text-green-600 text-7xl mb-5"></p>
            {/* Display a thank you message with user's name */}
            <p>Thank you {data.user.name} for the order!</p>
            {/* Display the order ID */}
            <p>Your Order ID: {data.id}</p>          
        </div>
        <div className="my-5">
            {/* Confirm the order and prompt the user to check their email */}
            <p>Your order is confirmed.</p>
            <p>Please check your mail ({data.user.email}) for the eBook.</p>
            {/* Display a placeholder for the payment ID */}
            <p className="my-5">Payment ID: xyz_123456789</p>
        </div>
        {/* Link to navigate back to the products page */}
        <Link to="/products" type="button" className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">
            Continue Shopping <i className="ml-2 bi bi-cart"></i>
        </Link>
    </section>
  )
}