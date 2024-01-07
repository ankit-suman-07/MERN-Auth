import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./style.css";

import PageTop from './PageTop';
import PageBottom from './PageBottom';

import Logo from "./assets/logo.jpg";
import Face from "./assets/businessman.png";
import Lock from "./assets/security.png";

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
            setGreet(message);

        } catch (error) {
            setMessage("*" + error.response.data.error);
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
        <>
            <PageTop />
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
                                <div className='input' >
                                    <div className='input-logo' >
                                        <img src={Face} />
                                    </div>
                                    <input
                                        type='text'
                                        name='username'
                                        placeholder='Username'
                                        value={loginData.username}
                                        onChange={handleLoginChange}
                                        required
                                    />
                                </div>
                                <div className='input' >
                                    <div className='input-logo' >
                                        <img src={Lock} />
                                    </div>
                                    <input
                                        type='password'
                                        name='password'
                                        placeholder='Password'
                                        value={loginData.password}
                                        onChange={handleLoginChange}
                                        required
                                    />
                                </div>


                            <button type='submit' className='login-btn'>
                                Login
                            </button>
                        </form>

                    </div>
                    <div className='bottom' >
                            Not registered?
                            <Link to='/' >
                        Register
                    </Link>
                    </div>
                </div>
            </div>

            </div>
            <PageBottom />
        </>
    )
}

export default Login;