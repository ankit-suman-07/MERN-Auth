const express = require('express');
const app = express();
const PORT = 8000;
const connectDB = require('./db/dbConnection');
const User = require('./db/user');


//Middleware for parsing json
app.use(express.json());

// Registration
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body);
    } catch (error) {

    }
})

app.listen(PORT, () => {
    console.log('Server is running....')
});