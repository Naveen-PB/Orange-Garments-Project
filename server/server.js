const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5001;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type'
}));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Orange_Garments', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// User schema and model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// API endpoint to handle registration
app.post('/api/register', async (req, res) => {
    const { username, email, phoneNumber, password } = req.body;

    try {
        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        // Create a new user
        const newUser = new User({
            username,
            email,
            phoneNumber,
            password, // Store password in plain text (not recommended)
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
});

// API endpoint to handle login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Check if the password matches (plain text comparison)
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Authentication successful
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
