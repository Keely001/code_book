// Function to handle user login
export async function login(authDetails) {
    // Define the request options for the login request
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // Correct header key capitalization
      body: JSON.stringify(authDetails)
    };
  
    // Make the login request to the server
    const resp = await fetch("http://localhost:8000/login", requestOptions);
    const data = await resp.json();
  
    // If the login is successful, store the access token and user ID in session storage
    if (data.accessToken) {
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }
  
    // Return the response data
    return data;
  }
  
  // Function to handle user registration
  export async function register(authDetails) {
    // Define the request options for the registration request
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // Correct header key capitalization
      body: JSON.stringify(authDetails)
    };
  
    // Make the registration request to the server
    const response = await fetch("http://localhost:8000/register", requestOptions);
    const data = await response.json();
  
    // If the registration is successful, store the access token and user ID in session storage
    if (data.accessToken) {
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }
  
    // Return the response data
    return data;
  }
  
  // Function to handle user logout
  export async function logout() {
    // Remove the access token and user ID from session storage
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
  }  