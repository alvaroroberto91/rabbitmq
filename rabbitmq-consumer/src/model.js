const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const template = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    }
});

module.exports = mongoose.model('template', template);