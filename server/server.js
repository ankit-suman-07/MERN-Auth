const express = require('express');
const app = express();
const PORT = 8000;
const connectDB = require('./db/dbConnection');
const DemoUser = require('./db/user');


//Middleware for parsing json
app.use(express.json());
connectDB();
// Registration
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body);

        const user = new DemoUser({ username, password });
        await user.save();
        res.status(201).json({ message: 'Registered successfully.' })
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
});

app.listen(PORT, () => {
    console.log('Server is running....')
});