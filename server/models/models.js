var mongoose = require('mongoose');
var ItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A product must have a title."],
        minlength: [3, "Need more info!"],
        maxlength: [20, "WHOAH! TOO LONG DID NOT READ!"]
    },
    price: {
        type: Number,
        required: [true, "It can't be free!!!"],
    },
    url: {
        type: String,
        required: [true, "What does it look like!?!?"],
        trim: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Item', ItemSchema);