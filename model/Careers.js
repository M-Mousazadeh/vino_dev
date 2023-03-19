const mongoose = require('mongoose');

const careerSchema = mongoose.Schema({
    id: String,
    title: String,
    titleimage: String,
    imagebody: String,
    description_1: String,
    description_2: String,
    category: String,
    userOpinions: [Object]
})

exports.model = mongoose.model('Career', careerSchema);