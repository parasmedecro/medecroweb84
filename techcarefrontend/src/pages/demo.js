const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON data

// Email validation function
const isValidEmail = (email) => {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Sign-up route
app.post('/signup', (req, res) => {
    const { email } = req.body;

    // Check if email is provided
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    // Validate email format
    if (!isValidEmail(email)) {
        return res.status(400).json({ message: 'Invalid email address' });
    }

    // If email is valid, proceed with further processing (e.g., save to database)
    // ...

    res.status(200).json({ message: 'Sign-up successful' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
