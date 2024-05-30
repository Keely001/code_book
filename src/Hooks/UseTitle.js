// Import the useEffect hook from React
import { useEffect } from "react";

// Define the UseTitle custom hook
export const UseTitle = (title) => {
  // Use the useEffect hook to set the document title when the title changes
  useEffect(() => {
    document.title = `${title} - Codebook`;
  }, [title]);

  // This hook does not render any UI, so return null
  return null;
}
