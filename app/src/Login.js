import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./style.css";

import Logo from "./assets/logo.jpg";

const Login = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const [message, setMessage] = useState("");
    const [greet, setGreet] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/login', loginData);
            const { success, message } = response.data;
            setMessage(message);

        } catch (error) {
            setMessage(error.response.data.error);
        }
        setLoginData({
            username: '',
            password: '',
        });
    }

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    return (
        <div className='outer' >
            <div className='box' >
                <div className='image' >
                    <img src={Logo} />
                </div>
                <div className='form' >
                    <div className='head login' >
                        Login
                    </div>
                    <div className='inner' >
                        <span className='error' >{message}</span>
                        <span className='greet' >{greet}</span>
                        <form onSubmit={handleFormSubmit} >
                            <input
                                type='text'
                                name='username'
                                placeholder='Username'
                                value={loginData.username}
                                onChange={handleLoginChange}
                                required
                            />
                            <input
                                type='password'
                                name='password'
                                placeholder='Password'
                                value={loginData.password}
                                onChange={handleLoginChange}
                                required
                            />
                            <button type='submit' className='login-btn'>
                                Login
                            </button>
                        </form>

                    </div>
                    <div className='bottom' >
                        Not regisstered?
                    <Link to='/signup' >
                        Register
                    </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;