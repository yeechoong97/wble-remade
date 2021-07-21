import {useState,react} from 'react';
import AuthService from './auth.service';

const apiLink = "http://127.0.0.1:8000/api";

function Login(props){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");


    async function loginSubmit(event){
        event.preventDefault();
        var result = await AuthService.loginService(username,password);
        if(result)
        {
            props.history.push('/');
            window.location.reload();
        }

    }


    return(
        <div className="container my-5 border px-5 py-5">
            <form onSubmit={loginSubmit}>
            <div className="form-group">
                <label>Username</label>
                <input type="text" name="username" className="form-control" onChange={(event)=> setUsername(event.target.value)}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" className="form-control" onChange={(event)=> setPassword(event.target.value)}/>
            </div>
            <div className="form-group text-center mt-5">
                <button type="submit" className="btn btn-primary">Login</button>
            </div>
            </form>
        </div>
    )

}

export default Login