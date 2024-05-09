import { Hero } from "./components/Hero"
import {FeaturedProducts} from './components/FeaturedProduct'
import { Testimonials } from "./components/Testimonials"
import { Faq } from "./components/Faq"
import { UseTitle } from "../../Hooks/UseTitle"

export const HomePage = () => {
  UseTitle("Access to Latest CS eBooks")
  return (
    <main>
        <Hero/>
        <FeaturedProducts/>
        <Testimonials/>
        <Faq/>
    </main>
  )
}
