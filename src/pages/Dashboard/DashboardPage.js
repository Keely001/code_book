// Import necessary hooks and components
import { useEffect, useState } from "react";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { getUserOrder } from "../../services";
import { UseTitle } from "../../Hooks/UseTitle";

// Define the DashboardPage functional component
export const DashboardPage = () => {
  // State to manage the user's orders
  const [orders, setOrders] = useState([]);
  // Set the document title using a custom hook
  UseTitle("Dashboard");
  // Fetch user orders when the component mounts
  useEffect(() => {
    async function fetchOrders() {
      const data = await getUserOrder();
      setOrders(data);
    }
    fetchOrders();
  }, []);
  // Return the JSX structure of the DashboardPage
  return (
    <main>
      <section>
        {/* Display the dashboard title */}
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>
      <section>
        {/* Map through the orders to display each order using DashboardCard */}
        {orders.length > 0 && orders.map((order) => (
          <DashboardCard key={order.id} order={order} />
        ))}
      </section>
      <section>
        {/* Display DashboardEmpty component if there are no orders */}
        {!orders.length && <DashboardEmpty />}
      </section>
    </main>
  )
}