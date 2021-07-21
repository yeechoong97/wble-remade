const apiLink = "http://127.0.0.1:8000/api";

const loginService = (username,password)=>{
    const requestOptions ={
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'username': username,
            'password': password
        })
    };

    return fetch(`${apiLink}/user/login`,requestOptions)
    .then((response)=> response.json())
    .then((response)=>{
        let isAuthenticated = false;
        if(response.success)
        {
            let userData ={
                role: response.data.role,
                id :response.data.id,
                username : response.data.username,
                token :response.data.auth_token,
                timestamp : new Date().toString()
            }

            let loginState ={
                isLoggedIn: true,
                user: userData,
            }
            localStorage.setItem("loginState",JSON.stringify(loginState));
            isAuthenticated = true;
        }
        return isAuthenticated;
    })
    .catch((error)=>{
        console.log(error);
    });        
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("loginState"));
}

const logout =() =>{
    localStorage.removeItem("loginState");
}

export default {loginService,getCurrentUser,logout}