const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    id: String,
    name: String,
    media: String,
    star: Boolean,
    colorMode: String,
    price: Number,
    description: String,
    category: String,
    components: Array,
    userOpinions: [Object]
})

exports.model = mongoose.model('Service', serviceSchema);