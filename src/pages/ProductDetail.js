// Import necessary hooks and components
import { useState, useEffect } from "react";
import { Ratings } from "../components";
import { useParams } from "react-router-dom";
import { UseTitle } from "../Hooks/UseTitle";
import { useCart } from "../context";
import { getProduct } from "../services";

// Define the ProductDetail functional component
export const ProductDetail = () => {
  // State to manage the product details
  const [product, setProduct] = useState({});
  // Get the product ID from the URL parameters
  const { id } = useParams();
  // Destructure cart-related functions and state from useCart hook
  const { cartList, addToCart, removeFromCart } = useCart();
  // State to manage whether the product is in the cart
  const [inCart, setInCart] = useState(false);
  // Set the document title using a custom hook
  UseTitle(product.name);

  // Fetch the product details when the component mounts or the ID changes
  useEffect(() => {
    async function fetchProduct() {
      const data = await getProduct(id);
      setProduct(data);
    }
    fetchProduct();
  }, [id]);

  // Check if the product is in the cart whenever the cart list or product changes
  useEffect(() => {
    const productInCart = cartList.find(item => item.id === product.id);
    setInCart(!!productInCart);
  }, [cartList, product.id]);

  // Return the JSX structure of the ProductDetail component
  return (
    <main>
      <section>
        {/* Product name */}
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{product.name}</h1>
        {/* Product overview */}
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{product.overview}</p>
        <div className="flex flex-wrap justify-around">
          {/* Product image */}
          <div className="max-w-xl my-3">
            <img className="rounded" src={product.poster} alt={product.name} />
          </div>
          <div className="max-w-xl my-3">
            {/* Product price */}
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">$</span>
              <span>{product.price}</span>
            </p>
            {/* Product rating */}
            <p className="my-3">
              <Ratings rating={product.rating} />
            </p>
            {/* Product labels */}
            <p className="my-4 select-none">
              {product.best_seller && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>}
              {product.in_stock ? <span className="font-semibold text-emerald-600 border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span> : <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span>}
              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{product.size} MB</span>
            </p>
            {/* Add to cart / Remove from cart button */}
            <p className="my-3">
              {inCart ? 
                <button onClick={() => removeFromCart(product)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={!product.in_stock}>
                  Remove Item <i className="ml-1 bi bi-trash3"></i>
                </button> :
                <button onClick={() => addToCart(product)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={!product.in_stock}>
                  Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
                </button>}
            </p>
            {/* Long description of the product */}
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {product.long_description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}