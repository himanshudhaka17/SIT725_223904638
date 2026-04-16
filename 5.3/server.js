const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/booksdb');

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log('MongoDB connection error:', err);
});

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Books routes
const booksRoute = require('./routes/books.routes');
app.use('/api/books', booksRoute);

// Integrity check route
app.get('/api/integrity-check42', (req, res) => {
  res.sendStatus(204);
});

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});