const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://ankitsuman07:Silenced%408697@bookstore.cm8rbur.mongodb.net/books-collection?retryWrites=true&w=majority')
    } catch (error) {
        console.log('Error connecting to DB!!!');
    }
    console.log('Connected to MongoDB.');

}