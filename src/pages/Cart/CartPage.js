// Import necessary hooks and components
import { UseTitle } from "../../Hooks/UseTitle";
import { useCart } from "../../context";
import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";

// Define the CartPage functional component
export const CartPage = () => {
  // Destructure cartList from useCart hook to access the list of items in the cart
  const { cartList } = useCart();

  // Set the document title using a custom hook, including the number of items in the cart
  UseTitle(`Cart (${cartList.length})`);

  // Return the JSX structure of the CartPage
  return (
    <main>
      {/* Conditional rendering based on whether the cart has items */}
      {cartList.length ? <CartList /> : <CartEmpty />}
    </main>
  )
}
