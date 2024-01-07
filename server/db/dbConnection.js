const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log('Connected to MongoDB.');
    } catch (error) {
        console.log('Error: ', error);
    }
}

module.exports = connectDB;