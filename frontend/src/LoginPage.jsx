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

  
};

export default LoginPage;
