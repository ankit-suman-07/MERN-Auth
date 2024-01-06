const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://ankitsuman07:Silenced%408697@bookstore.cm8rbur.mongodb.net/projects?retryWrites=true&w=majority');
        console.log('Connected to MongoDB.');
    } catch (error) {
        console.log('Error: ', error);
    }
}

module.exports = connectDB;