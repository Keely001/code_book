export async function login(authDetails){
    const requestOptions = {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(authDetails)
    }

    const resp = await fetch("http://localhost:8000/login", requestOptions)
    const data = await resp.json();

    if (data.accessToken){
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }

    return data
}

export async function register(authDetails){
    const requestOption = {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(authDetails)
    }

    const response = await fetch("http://localhost:8000/register", requestOption)
    const data = await response.json()

    if (data.accessToken){
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }

    return data;
}

export async function logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
}