const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Endpoint to get all items
app.get('/api/private_key', (req, res) => {
    res.json(process.env.PRIVATE_KEY);
    //res.json(process.env.PRIVATE_KEY);
});

// Endpoint to get all items
app.get('/api/test_api', (req, res) => {
    res.json("Running");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});