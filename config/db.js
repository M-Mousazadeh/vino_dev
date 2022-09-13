const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        const conn = mongoose.connect(process.env.MONGO_URI);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;