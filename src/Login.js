import React, {useState} from "react";
import logo from "./image/logo.png";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault(); //Stops page refresh

        //do login logic
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //logged in successfully, redirect to home page
             history.push("/");
            })
            .catch((e) => alert(e.message)); 
    };

    const register = (event) => {
        event.preventDefault(); //Stops page refresh
        //do login logic

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                //create a user and login
            })
            .catch((e) => alert(e.message)); 
    };

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src={logo}
                />
            </Link>

            <div className="login_container">
                <h1> Sign In</h1>
                <form>
                    <h5> E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login_signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to Urgent's Terms and Conditions operations.
                    See our privacy Notice, Cookies Notice and interest based Ads.
                    
                </p>
                <button onClick={register} className="login_registerButton">Create your Urgent Account</button>
            </div>
        </div>
    );
}

export default Login;