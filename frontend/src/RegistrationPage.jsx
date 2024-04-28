import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
    const [registrationData, setRegistrationData] = useState({
        username: '',
        password: ''
    });

    const [message, setMessage] = useState('');

    
};

export default RegistrationPage;
