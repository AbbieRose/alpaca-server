var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
    name: {
        type: String,
        required: 'Name of player'
    },
    score: {
        type: Number,
        default: 0
    }
});
// fix this schema
module.exports = mongoose.model('Score', GameSchema);