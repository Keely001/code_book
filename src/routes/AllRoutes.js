// Import necessary components from React Router and local pages
import { Routes, Route } from "react-router-dom";
import { DashboardPage, HomePage, Login, PageNotFound, Register } from "../pages";
import { ProductsList, ProductDetail, CartPage, OrderPage } from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

// Define the AllRoutes functional component
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<HomePage />} />
        {/* Route for the products list page */}
        <Route path="products" element={<ProductsList />} />
        {/* Route for the product detail page */}
        <Route path="products/:id" element={<ProductDetail />} />
        {/* Route for the login page */}
        <Route path="login" element={<Login />} />
        {/* Route for the register page */}
        <Route path="register" element={<Register />} />
        
        {/* Protected route for the cart page */}
        <Route path="cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
        {/* Protected route for the order summary page */}
        <Route path="order-summary" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
        {/* Protected route for the dashboard page */}
        <Route path="dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        
        {/* Route for the 404 page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
