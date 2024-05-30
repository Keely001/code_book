// Import the Link component from react-router-dom for navigation
import { Link } from "react-router-dom";
// Import the useCart hook to access cart-related functions
import { useCart } from "../../../context";

// Define the CartCard functional component
export const CartCard = ({ product }) => {

  // Destructure removeFromCart function from useCart hook
  const { removeFromCart } = useCart();

  // Return the JSX structure of the CartCard
  return (
    <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
      <div className="flex">
        {/* Link to the product detail page */}
        <Link to={`products/${product.id}`}>
          <img className="w-32 rounded" src={product.poster} alt={product.name} />
        </Link>
        <div className="">
          {/* Product name linked to the product detail page */}
          <Link to={`products/${product.id}`}>
            <p className="text-lg ml-2 dark:text-slate-200">{product.name}</p>
          </Link>
          {/* Button to remove the product from the cart */}
          <button onClick={() => removeFromCart(product)} className="text-base ml-2 text-red-400">Remove</button>
        </div>
      </div>
      <div className="text-lg m-2 dark:text-slate-200">
        {/* Display the product price */}
        <span>${product.price}</span>
      </div>
    </div>
  )
}
