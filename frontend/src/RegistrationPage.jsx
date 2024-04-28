import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
    const [registrationData, setRegistrationData] = useState({
        username: '',
        password: ''
    });

    const [message, setMessage] = useState('');

    const handleRegistrationChange = (e) => {
        const { name, value } = e.target;

        setRegistrationData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/register', registrationData);
            setMessage(response.data.message);
        } catch (error) {
            console.log(error);
            setMessage(`Username Already Exists: ${error.message}`);
        }
        setRegistrationData({
            username: '',
            password: '',
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <div className="max-w-md w-full bg-white p-8 rounded-md shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Register an Account</h2>
                <form className="space-y-4" onSubmit={handleRegistrationSubmit}>
                    <div>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={registrationData.username}
                            onChange={handleRegistrationChange}
                            required
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={registrationData.password}
                            onChange={handleRegistrationChange}
                            required
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-pink-600 text-white rounded-md shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition duration-300"
                    >
                        Register
                    </button>
                    {message && <p className="text-red-500">{message}</p>}
                </form>
                <div className="text-center mt-4">
                    <p className="text-gray-700">Already have an account? <Link to="/" className="font-semibold text-indigo-600 hover:text-indigo-800">Sign in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;
