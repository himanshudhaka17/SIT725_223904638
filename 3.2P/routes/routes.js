const express = require('express');
const router = express.Router();
const path = require('path');
const Item = require('../models/item');

// Home page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

// API: get items from MongoDB
router.get('/api/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).send(err);
    }
});

// API: insert sample data (run once)
router.get('/api/add', async (req, res) => {
    await Item.deleteMany({});

    await Item.insertMany([
        {
            title: "Feature 1",
            image: "https://picsum.photos/300/200?1",
            description: "Loaded from MongoDB"
        },
        {
            title: "Feature 2",
            image: "https://picsum.photos/300/200?2",
            description: "Database connected successfully"
        },
        {
            title: "Feature 3",
            image: "https://picsum.photos/300/200?3",
            description: "Express + MongoDB integration"
        }
    ]);

    res.send("Data inserted!");
});

module.exports = router;