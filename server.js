const express = require('express');
const morgan = require('morgan');
const app = express();

// Custom Middleware for logging requests
const requestLogger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const ip = req.ip;
    const timestamp = new Date().toISOString();
    const name = 'Manish Kumar';

    console.log(`[${timestamp}] ${method} request to ${url} from ${ip} logged by ${name}`);
    next();
};

// Use the custom logger middleware
app.use(requestLogger);

// Optionally use Morgan for more advanced logging
app.use(morgan('combined'));

// Example route
app.get('/', (req, res) => {
    res.send('Welcome to the Express Request Logger App!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
