const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
const connectDB = require('./db/dbConnection');
const User = require('./db/user');


//Middleware for parsing json
app.use(express.json());
connectDB();

app.use(cors());

// Registration
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body);

        const user = new User({ username, password });
        await user.save();
        res.status(201).json({ message: 'Registered successfully.' })
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
});

// LogIn
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ error: 'User Not Found' })
        }

        if (user.password !== password) {
            return res.status(401).json({ error: 'Incorrect password!!!' })
        }

        res.status(200).json({ message: 'Logged In' })
    } catch (error) {
        res.status(500).json({ error: 'Login Failed!!!' })
    }
})

app.listen(PORT, () => {
    console.log('Server is running....')
});