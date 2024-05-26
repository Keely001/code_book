export async function getProductList(searchTerm){

    const resp = await fetch(`http://localhost:8000/444/products?name_like=${searchTerm? searchTerm: ""}`)
    const data = await resp.json();

    return data;

}

export async function getProduct(id){
    const resp = await fetch(`http://localhost:8000/444/products/${id}`)
    const data = await resp.json()

    return data;
}

export async function getFeaturedList(){

    const resp = await fetch("http://localhost:8000/444/featured_products");
    const data = await resp.json()

    return data;

}