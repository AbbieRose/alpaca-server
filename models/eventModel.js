var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
    name: {
        type: String,
        required: 'Name of player'
    },
    spell: {
        type: String,
        default: "None"
    }
});

module.exports = mongoose.model('GameEvent', EventSchema);