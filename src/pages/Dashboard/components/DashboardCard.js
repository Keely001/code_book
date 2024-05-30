// Import the Link component from react-router-dom for navigation
import { Link } from "react-router-dom";

// Define the DashboardCard functional component
export const DashboardCard = ({ order }) => {
    return (
        <div className="max-w-4xl m-auto p-2 mb-5 border dark:border-slate-700">
            {/* Display order ID and total amount paid */}
            <div className="flex justify-between text-sm m-2 font-bold dark:text-slate-200">
                <span>Order Id: {order.id}</span>
                <span>Total: ${order.amount_paid}</span>
            </div>
            {/* Display the list of products in the order */}
            <div className="flex flex-wrap justify-between max-w-4xl m-auto p-2 my-5">
                <div>
                    {order.cartList.map((product) => (
                        <div key={product.id} className="flex my-5">
                            {/* Link to the product detail page */}
                            <Link to={`/products/${product.id}`}>
                                <img className="w-32 rounded" src={product.poster} alt={product.name} />
                            </Link>
                            <div className="mx-20">
                                {/* Product name linked to the product detail page */}
                                <Link to={`/products/${product.id}`}>
                                    <p className="text-lg ml-2 dark:text-slate-200">{product.name}</p>
                                </Link>
                                {/* Display the product price */}
                                <div className="text-lg m-2 dark:text-slate-200">
                                    <span>${product.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
