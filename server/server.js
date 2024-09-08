const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // For environment variables

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type'
}));
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/Orange_Garments';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// User schema and model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^\d+$/.test(v); // Regex to ensure phone number contains only digits
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    password: { type: String, required: true },
    category: { type: String, default: 'user' } // Default value is 'user'
});

const User = mongoose.model('User', userSchema);

// Product schema and model with new fields
const productSchema = new mongoose.Schema({
    pname: { type: String, required: true },
    pprice: { type: Number, required: true },
    rating: { type: Number, required: true },
    category: { type: String, required: true },
    img: { type: String, required: true },
    discount: { type: String },  // Optional discount field
    description: { type: String }, // New description field
    size: { type: String } // New size field
});

const Product = mongoose.model('Product', productSchema); // Collection name is 'products'

// API endpoint to handle registration
app.post('/api/register', async (req, res) => {
    const { username, email, phoneNumber, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        const newUser = new User({
            username,
            email,
            phoneNumber,
            password, // Store plain text password
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user', details: error.message });
    }
});

// API endpoint to handle login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) { // Compare plain text password
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        res.status(200).json({
            message: 'Login successful',
            category: user.category // Include category field
        });
    } catch (error) {
        res.status(500).json({ error: 'Error logging in', details: error.message });
    }
});

// API endpoint to get all users (both 'user' and 'admin' categories)
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users', details: error.message });
    }
});

// API endpoint to get all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching products', details: error.message });
    }
});

// API endpoint to get a single product by ID
app.get('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching product', details: error.message });
    }
});

// API endpoint to create a new product (for testing)
app.post('/api/products', async (req, res) => {
    const { pname, pprice, rating, category, img, discount, description, size } = req.body;

    try {
        const newProduct = new Product({
            pname,
            pprice,
            rating,
            category,
            img,
            discount,
            description, // New field
            size // New field
        });

        await newProduct.save();
        res.status(201).json({ message: 'Product created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error creating product', details: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
