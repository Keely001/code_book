import { useLocation } from "react-router-dom";
import { OrderFail } from "./components/OrderFail";
import  {OrderSuccess} from "./components/OrderSuccess"
import { UseTitle } from "../../Hooks/UseTitle";


export const OrderPage = () => {
    const {state} = useLocation();

    UseTitle("Order Summary")

    return (
        <main>
            {state.status ? <OrderSuccess data = {state.data} /> : <OrderFail />}
        </main>
  )
}
