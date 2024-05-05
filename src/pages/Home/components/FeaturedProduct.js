import { useEffect, useState } from "react"
import { ProductCard } from "../../../components"

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
        const resp = await fetch("http://localhost:8000/featured_products");
        const data = await resp.json()
        setProducts(data);
    }
    fetchProducts();
  }, [])
    return (
      <section className="my-20">
          <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
          <div className="flex flex-wrap justify-center lg:flex-row">

            {products.map((product) => {
              return <ProductCard key={product.id} product={product}/>
            })}

          </div>
      </section>
    )
  }