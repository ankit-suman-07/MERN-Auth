import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [signUpData, setSignUpData] = useState({
        username: '',
        password: '',
    });

    const [message, setMessage] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/register', signUpData);
            console.log(response.data.message);
            setMessage(response.data.message);
        } catch (error) {
            console.log(error.response.data.error);
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
        <div>
            <h3>SignUp Page</h3>
            <form onSubmit={handleFormSubmit} >
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={signUpData.username}
                    onChange={handleSignUpChange}
                    required
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={signUpData.password}
                    onChange={handleSignUpChange}
                    required
                />
                <p>
                    {
                        <span>{message}</span>
                    }
                </p>
                <button type='submit' >
                    Sign Up
                </button>

                <p>
                    Already registered?
                    <Link to='/login' >
                        Login
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default SignUp;