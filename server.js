const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import the CORS package

const app = express();
const port = 3001;

// Enable CORS for all origins (you can specify specific origins if needed)
app.use(cors());

// Create a connection to the MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Thorking112@',
    database: 'your_database_name'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database');
});

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post('/submit', (req, res) => {
    const { name, email, birthdate } = req.body;

    // SQL query to insert data into the database
    const query = 'INSERT INTO users (name, email,birthdate) VALUES (?, ?, ?)';
    
    db.query(query, [name, email, birthdate], (err, result) => {
        if (err) {
            console.error('Error inserting data: ' + err.stack);
            res.status(500).json({ message: 'Error saving data' });
            return;
        }
        res.status(200).json({ message: 'Data saved successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
