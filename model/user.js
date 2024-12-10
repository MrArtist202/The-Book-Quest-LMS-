const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        unique: true, 
        required: true 
    },
    message: { 
        type: String, 
        required: true 
    }
});

module.exports = mongoose.model('User', schema);
