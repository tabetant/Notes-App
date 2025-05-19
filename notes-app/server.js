const express = require('express');

const app = express();
const port = 3000;
const fs = require("fs");
const path = require('path');

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// GET route
app.get('/notes', (req, res) => {
    fs.readFile('notes.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading file' });
        }
        let notes = [];
        try {
            notes = JSON.parse(data);
        } catch (parseErr) {
            return res.status(500).json({ message: 'Error parsing JSON' });
        }
        res.json(notes);
    })
});

// POST route
app.post('/notes', (req, res) => {
    const newNote = req.body;
    fs.readFile('notes.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading file' });
        }
        let notes = [];
        try {
            notes = JSON.parse(data);
        } catch (parseErr) {
            return res.status(500).json({ message: 'Error parsing JSON' });
        }
        notes.push(newNote);

        fs.writeFile('notes.json', JSON.stringify(notes, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error writing file' });
            }
            res.status(201).json({ message: 'Saved', data: newNote });
        })
    })
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});