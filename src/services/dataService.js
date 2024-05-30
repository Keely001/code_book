// Function to get the token and user ID from session storage
function browserInfo() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  
    return { cbid, token };
  }
  
  // Function to get user details from the server
  export async function getUser() {
    const { cbid, token } = browserInfo();
  
    // Fetch user details using the user ID and token
    const response = await fetch(`http://localhost:8000/600/users/${cbid}`, {
      method: "GET",
      headers: { 
        "Content-Type": "application/json", 
        Authorization: `Bearer ${token}` 
      }
    });
    const data = await response.json();
  
    return data;
  }
  
  // Function to get user orders from the server
  export async function getUserOrder() {
    const { cbid, token } = browserInfo();
  
    // Fetch user orders using the user ID and token
    const response = await fetch(`http://localhost:8000/660/orders?user.id=${cbid}`, {
      method: "GET",
      headers: { 
        "Content-Type": "application/json", 
        Authorization: `Bearer ${token}` 
      }
    });
    const data = await response.json();
  
    return data;
  }
  
  // Function to create a new order on the server
  export async function createOrder(cartList, total, user) {
    const { token } = browserInfo();
  
    // Create an order object with the cart list, total amount, quantity, and user details
    const order = {
      cartList,
      amount_paid: total,
      quantity: cartList.length,
      user: {
        name: user.name,
        email: user.email,
        id: user.id
      }
    };
  
    // Send the order object to the server
    const response = await fetch("http://localhost:8000/660/orders", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json", 
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify(order)
    });
    const data = await response.json();
  
    return data;
  }
  