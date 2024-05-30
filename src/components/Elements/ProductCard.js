// Import necessary hooks and components
import { Link } from "react-router-dom";
import { Ratings } from "./Ratings";
import { useCart } from "../../context";
import { useEffect, useState } from "react";

// Define the ProductCard functional component
export const ProductCard = ({ product }) => {
  // Destructure product properties
  const { id, name, overview, poster, price, rating, best_seller } = product;
  // Destructure cart-related functions and state from useCart hook
  const { cartList, addToCart, removeFromCart } = useCart();
  // State to manage whether the product is in the cart
  const [inCart, setInCart] = useState(false);

  // Check if the product is in the cart whenever the cart list or product changes
  useEffect(() => {
    const productInCart = cartList.find(item => item.id === product.id);
    setInCart(!!productInCart);
  }, [cartList, product.id]);

  // Return the JSX structure of the ProductCard component
  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      {/* Link to product detail page */}
      <Link to={`/products/${id}`} className="relative">
        {best_seller && <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span>}
        <img className="rounded-t-lg w-full h-64" src={poster} alt={name} />
      </Link>
      <div className="p-5">
        {/* Product name */}
        <Link to={`/products/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </Link>
        {/* Product overview */}
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
        
        {/* Product rating */}
        <div className="flex items-center my-2">
          <Ratings rating={rating} />
        </div>

        {/* Product price and Add to Cart/Remove from Cart button */}
        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>$</span><span>{price}</span>
          </span>
          {inCart ?  
            <button onClick={() => removeFromCart(product)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={!product.in_stock}>Remove Item <i className="ml-1 bi bi-trash3"></i></button> :
            <button onClick={() => addToCart(product)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={!product.in_stock}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>}
        </p>
      </div>
    </div>
  );
}
