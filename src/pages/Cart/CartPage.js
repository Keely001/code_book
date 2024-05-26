import { UseTitle } from "../../Hooks/UseTitle";
import { useCart } from "../../context";
import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList"


export const CartPage = () => {
  const { cartList } = useCart();

  UseTitle(`Cart (${cartList.length})`)

  return (
    <main>
      {cartList.length ? <CartList /> : <CartEmpty />}
    </main>
  )
}