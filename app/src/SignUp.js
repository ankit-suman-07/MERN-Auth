import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./style.css";
import PageTop from './PageTop';
import PageBottom from './PageBottom';

import Logo from "./assets/logo.jpg";
import Face from "./assets/businessman.png";
import Lock from "./assets/security.png";

const SignUp = () => {
    const [signUpData, setSignUpData] = useState({
        username: '',
        password: '',
    });

    const [message, setMessage] = useState("");
    const [greet, setGreet] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/register', signUpData);
            setGreet(response.data.message);
        } catch (error) {
            setMessage(error.response.data.error);
        }
        setSignUpData({
            username: '',
            password: '',
        });
    }

    const handleSignUpChange = (e) => {
        const { name, value } = e.target;
        setSignUpData((prevData) => ({
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
                        <div className='head' >
                            Sign Up
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
                                        value={signUpData.username}
                                        onChange={handleSignUpChange}
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
                                        value={signUpData.password}
                                        onChange={handleSignUpChange}
                                        required
                                    />
                                </div>


                                <button type='submit' >
                                    Sign Up
                                </button>
                            </form>

                        </div>
                        <div className='bottom' >
                            Already registered?
                            <Link to='/login' >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <PageBottom />
        </>
    )
}

export default SignUp;