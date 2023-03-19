const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    id: String,
    writer: String,
    media: String,
    dateID: String,
    title: String,
    description: String,
    category: String,
    userOpinions: [Object]
})

exports.model = mongoose.model('Blog', blogSchema);