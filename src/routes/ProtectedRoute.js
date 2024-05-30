// Import necessary components from React Router
import { Navigate } from "react-router-dom";

// Define the ProtectedRoute functional component
export const ProtectedRoute = ({ children }) => {
  // Get the authentication token from session storage
  const token = JSON.parse(sessionStorage.getItem("token"));

  // If token exists, render the children components, otherwise navigate to the login page
  return token ? children : <Navigate to="/login" />;
}
