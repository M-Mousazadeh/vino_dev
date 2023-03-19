const mongoose = require('mongoose');

const emplSchema = mongoose.Schema({
    id: String,
    Name: String,
    media: String,
    PhoneNumber: String,
    Email: String,
    Type: String,
})

exports.empModel = mongoose.model('Employee', emplSchema);