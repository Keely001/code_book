// Import necessary modules and components
import { useLocation } from "react-router-dom";
import { OrderFail } from "./components/OrderFail";
import { OrderSuccess } from "./components/OrderSuccess";
import { UseTitle } from "../../Hooks/UseTitle";

// Define the OrderPage functional component
export const OrderPage = () => {
    // Destructure state from useLocation hook to access navigation state
    const { state } = useLocation();

    // Set the document title using a custom hook
    UseTitle("Order Summary");

    // Return the JSX structure of the OrderPage
    return (
        <main>
            {/* Conditional rendering based on order status */}
            {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
        </main>
    )
}
