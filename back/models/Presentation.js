const mongoose = require("mongoose");

const presentationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
    category: {
        type: Array,
        required: true
    },
    driveUrl: {
        type: String,
        required: true
    }
});

const Presentation = mongoose.model('presentation', presentationSchema);

module.exports = Presentation