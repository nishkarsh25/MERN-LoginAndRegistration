import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [loginMessage, setLoginMessage] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login', loginData);
      const { message } = response.data;
      setLoginMessage(message);
    } catch (error) {
      console.error('Login error', error);
      setLoginMessage('Login Unsuccessful');
    }
    setLoginData({
      username: '',
      password: '',
    });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-500">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
        <form className="mt-6" onSubmit={handleLoginSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={loginData.username}
            onChange={handleLoginChange}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:shadow-outline-indigo"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleLoginChange}
            required
            className="mt-4 w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:shadow-outline-indigo"
          />
          <button
            type="submit"
            className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </button>
          {loginMessage && <p className="mt-4 text-center text-red-500">{loginMessage}</p>}
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link
            to="/registration"
            className="font-semibold text-indigo-600 hover:text-indigo-800 transition duration-300 ease-in-out"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
