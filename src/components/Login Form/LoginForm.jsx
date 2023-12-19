import React from "react";
import "./LoginForm.css";
import { FaLock, FaUser, FaGoogle , FaFacebookF} from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";


const LoginForm = () => {
    return (
        <div className="wrapper">
            <form action=" ">
                <h1>Login</h1>
                <div className="input-box">
                    <input 
                    type="email" 
                    placeholder="Username" 
                    required   
                    />
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <FaLock className="icon"/>
                </div>
                <div className="forgot">
                    <label><input type="checkbox"/>Remember Me</label>
                    <a href=" ">Forgot Password?</a>
                </div>
                <button type="submit">Login</button>
                <div className="others">
                    <a href=" "><FaGoogle /></a>
                    <a href=" "><TbBrandGithubFilled /></a>
                    <a href=" "><FaFacebookF /></a>
                </div>
                <div className="register">
                    Don't have an account? <a href=" ">Sign Up</a>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
