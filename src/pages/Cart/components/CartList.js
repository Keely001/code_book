// Import necessary hooks and components
import { useState } from "react";
import { CartCard } from "./CartCard";
import { Checkout } from "./Checkout";
import { useCart } from "../../../context";

// Define the CartList functional component
export const CartList = () => {
  // State to manage the checkout process
  const [checkout, setCheckout] = useState(false);
  // Destructure cartList and total from useCart hook
  const { cartList, total } = useCart();

  // Return the JSX structure of the CartList
  return (
    <>
      <section>
        {/* Display the cart title with the number of items */}
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Cart ({cartList.length})
        </p>
      </section>

      <section>
        {/* Map through the cartList to display each product using CartCard */}
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>

      <section className="max-w-4xl m-auto">
        {/* Display the total amount */}
        <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
          <p className="flex justify-between my-2">
            <span className="font-semibold">Total Amount:</span>
            <span>${total}</span>
          </p>
        </div>
        {/* Button to initiate the checkout process */}
        <div className="text-right my-5">
          <button onClick={() => setCheckout(true)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
            PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
          </button>
        </div>
      </section>
      {/* Render the Checkout component if checkout is true */}
      {checkout && <Checkout setCheckout={setCheckout} />}
    </>
  )
}