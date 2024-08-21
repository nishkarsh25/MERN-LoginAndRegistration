const mongoose = require('mongoose');
const connectDB = async() => {
    try{
        await mongoose.connect('mongodb+srv://nishkarshgupta671:nishkarshgupta671@mydatabase.flyze.mongodb.net/?retryWrites=true&w=majority&appName=myDatabase');
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.log(error);
    }
}

module.exports = connectDB;