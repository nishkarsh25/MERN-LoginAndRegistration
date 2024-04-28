const express = require('express');
const app = express();
const port = 8000;
const connectDB = require('./db/dbConnection');
const User = require('./db/user');
const cors = require('cors');

//Middleware for parsing JSON
app.use(express.json());

//Enable CORS
app.use(cors())

