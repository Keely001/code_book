import { useEffect, useState } from "react";
import { ProductCard } from "../../../components";
import { getFeaturedList } from "../../../services";

// FeaturedProducts component definition
export const FeaturedProducts = () => {
  // State to hold the list of featured products
  const [products, setProducts] = useState([]);

  // useEffect hook to fetch featured products when the component mounts
  useEffect(() => {
    async function fetchProducts() {
        const data = await getFeaturedList();
        setProducts(data);
    }
    fetchProducts();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    // Main section container
    <section className="my-20">
      {/* Section heading */}
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
      
      {/* Container for product cards, responsive design with flex display */}
      <div className="flex flex-wrap justify-center lg:flex-row">
        {/* Mapping over products to render each product card */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};