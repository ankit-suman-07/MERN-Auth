import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const [message, setMessage] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/login', loginData);
            const { success, message } = response.data;
            setMessage(message);
            if (success) {
                console.log(response.data);
            }
            else {
                console.log("User not found");
                console.log(response.data);

            }
        } catch (error) {
            console.log(error.response.data.error);
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
        <div>
            <h3>Login Page</h3>
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
                <p>
                    {
                        <span>{message}</span>
                    }
                </p>
                <button type='submit' >
                    Login
                </button>
                <p>
                    Not regisstered?
                    <Link to='/signup' >
                        Register
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Login;