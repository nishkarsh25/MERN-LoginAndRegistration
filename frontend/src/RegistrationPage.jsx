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

    
};

export default RegistrationPage;
