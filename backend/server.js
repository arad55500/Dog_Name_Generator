const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001; // Make sure this port is different from your React app

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Endpoint to generate a random dog name
app.get('/generate-name', (req, res) => {
    const dogNames = ['Buddy', 'Bella', 'Charlie', 'Luna', 'Max', 'Lucy', 'Bailey', 'Daisy'];
    const randomName = dogNames[Math.floor(Math.random() * dogNames.length)];
    res.json({ name: randomName });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
