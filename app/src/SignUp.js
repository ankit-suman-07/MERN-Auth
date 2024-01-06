import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [signUpData, setSignUpData] = useState({
        username: '',
        password: '',
    });

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/register', signUpData);
            //const { success, message } = response.data;
            console.log(response.data);
        } catch (error) {

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