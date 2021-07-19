import {useState,react} from 'react';
import AuthService from './auth.service';

const apiLink = "http://127.0.0.1:8000/api";

function Login(){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");


    async function loginSubmit(event){
        event.preventDefault();
        await AuthService.loginService(username,password);
        window.location.reload();
    }


    return(
        <div className="container my-5 border px-5 py-5">
            <form onSubmit={loginSubmit}>
            <div className="form-group">
                <label>ID</label>
                <input type="text" name="id" className="form-control" onChange={(event)=> setUsername(event.target.value)}/>
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