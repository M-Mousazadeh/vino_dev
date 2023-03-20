const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    id: String,
    name: String,
    media: String,
    star: Boolean,
    colorMode: String,
    price: Number,
    status: String,
    description: String,
    category: String,
    components: Array,
    userOpinions: [Object]
})

exports.modelService = mongoose.model('Service', serviceSchema);