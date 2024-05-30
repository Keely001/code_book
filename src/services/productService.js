// Function to get the list of products based on a search term
export async function getProductList(searchTerm) {
    // Fetch the products from the server using the search term
    const resp = await fetch(`http://localhost:8000/444/products?name_like=${searchTerm ? searchTerm : ""}`);
    const data = await resp.json();
  
    // Return the list of products
    return data;
  }
  
  // Function to get the details of a single product by ID
  export async function getProduct(id) {
    // Fetch the product details from the server using the product ID
    const resp = await fetch(`http://localhost:8000/444/products/${id}`);
    const data = await resp.json();
  
    // Return the product details
    return data;
  }
  
  // Function to get the list of featured products
  export async function getFeaturedList() {
    // Fetch the featured products from the server
    const resp = await fetch("http://localhost:8000/444/featured_products");
    const data = await resp.json();
  
    // Return the list of featured products
    return data;
  }  