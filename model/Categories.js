const mongoose = require('mongoose');

const cateSchema = mongoose.Schema({
    id: String,
    name: String,
    tag: String
})

exports.categoriesModel = mongoose.model('Category', cateSchema);