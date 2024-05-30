// Import necessary hooks
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Define the ScrollToTop functional component
export const ScrollToTop = () => {
  // Get the current location pathname
  const { pathname } = useLocation();

  // Use effect to scroll to top whenever the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Return null as this component does not render any UI
  return null;
}
