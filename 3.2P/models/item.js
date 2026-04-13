const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String
});

module.exports = mongoose.model('Item', itemSchema);