const express = require('express');
const router = express.Router();
const path = require('path');

const items = [
  {
    title: 'Smart Feature 1',
    image: 'https://picsum.photos/300/200?random=1',
    description: 'This card is loaded from the Express backend using an API route.'
  },
  {
    title: 'Smart Feature 2',
    image: 'https://picsum.photos/300/200?random=2',
    description: 'This demonstrates dynamic card rendering using fetch() in the frontend.'
  },
  {
    title: 'Smart Feature 3',
    image: 'https://picsum.photos/300/200?random=3',
    description: 'This page also includes a navbar, image logo, external link, cards, and modal.'
  }
];

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/api/items', (req, res) => {
  res.json(items);
});

module.exports = router;