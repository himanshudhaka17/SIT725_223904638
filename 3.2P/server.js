const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/sit725')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./routes/routes');
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});