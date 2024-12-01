const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let products = []; // Temporary in-memory storage for products

// Route to add a new product
app.post('/api/products', (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).send({ message: 'Product added', product });
});

// Route to fetch all products
app.get('/api/products', (req, res) => {
    res.send(products);
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
