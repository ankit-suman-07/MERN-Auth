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
    const [length, setLength] = useState("");
    const [digit, setDigit] = useState("");
    const [letter, setLetter] = useState("");
    const [special, setSpecial] = useState("");
    const [greet, setGreet] = useState("");
    const [valid, setValid] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/register', signUpData);
            setGreet(response.data.message);
        } catch (error) {
            setMessage("*" + error.response.data.error);
        }
        setSignUpData({
            username: '',
            password: '',
        });
    }

    const handleSignUpChange = (e) => {
        const { name, value } = e.target;

        if (name === "password") {
            if (value.length < 8) {
                setLength("*Must be atleast 8 characters.");
            }
            else {
                setLength("");
            }
            if (/\d/.test(value)) {
                setDigit("");
            }
            else {
                setDigit("*Must contain atleast 1 digit.");
            }
            if (/[a-zA-Z]/.test(value)) {
                setLetter("");
            }
            else {
                setLetter("*Must contain atleast 1 alphabet.");
            }
            if (/[^a-zA-Z0-9]/.test(value)) {
                setSpecial("");
            }
            else {
                setSpecial("*Must contain atleast 1 special character.");

            }

            if ((value.length < 8) || !(/\d/.test(value)) || !(/[a-zA-Z]/.test(value)) || !(/[^a-zA-Z0-9]/.test(value))) {
                setValid(false);
            }
            else {
                setValid(true);
            }

        }

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
                            <span className='error' >{length}</span>
                            <span className='error' >{letter}</span>
                            <span className='error' >{digit}</span>
                            <span className='error' >{special}</span>
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
                                <span className='greet show-pass' >{signUpData.password}</span>

                                {
                                    valid ?
                                        <button type='submit'>
                                            Sign Up
                                        </button> :
                                        <button type='submit' disabled >
                                            Sign Up
                                        </button>
                                }

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