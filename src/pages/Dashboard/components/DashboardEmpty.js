// Define the DashboardEmpty functional component
export const DashboardEmpty = () => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700 rounded">
        <div className="my-5">
            {/* Display a cart icon indicating an empty dashboard */}
            <p className="bi bi-cart text-green-600 text-7xl mb-5"></p>
            {/* Display a message indicating the dashboard is empty */}
            <p>Oops! Your order dashboard looks empty!</p>
            {/* Suggest adding eBooks to the cart */}
            <p>Add eBooks to your cart from our store collection.</p>
        </div>
        {/* Link to navigate back to the store */}
        <a href="/" type="button" className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">
            Continue Shopping <i className="ml-2 bi bi-cart"></i>
        </a>
    </section>  
  )
}
