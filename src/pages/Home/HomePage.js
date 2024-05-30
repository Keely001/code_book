// Import necessary components
import { Hero } from "./components/Hero"
import { FeaturedProducts } from './components/FeaturedProduct'
import { Testimonials } from "./components/Testimonials"
import { Faq } from "./components/Faq"
import { UseTitle } from "../../Hooks/UseTitle"

// Define the HomePage functional component
export const HomePage = () => {
  // Set the document title using a custom hook
  UseTitle("Access to Latest CS eBooks")

  // Return the JSX structure of the HomePage
  return (
    <main>
        {/* Hero section component */}
        <Hero/>

        {/* Featured products section component */}
        <FeaturedProducts/>

        {/* Testimonials section component */}
        <Testimonials/>

        {/* Frequently Asked Questions section component */}
        <Faq/>
    </main>
  )
}