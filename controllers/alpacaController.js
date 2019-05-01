var mongoose = require('mongoose'), 
Score = mongoose.model('Score'),
GameEvent = mongoose.model('GameEvent');

exports.list_score = function(req, res) {
    Score.find({}, function(err, score) {
        if (err)
            res.send(err);
        res.json(score)
    });
};

exports.update_score = function(req, res) {
    Score.findOneAndUpdate({_id: req.params.name}, req.body, {new: true}, function(err, score){
        if (err)
            res.send(err);
        res.json(score);
    });
};

exports.new_event = function(req, res) {
    var new_event = new GameEvent(req.body);
    new_event.save(function(err, game_event) {
        if (err)
            res.send(err);
        res.json(game_event);
    });
};

exports.list_events = function(req, res) {
    GameEvent.find({}, function(err, game_event) {
        if (err)
            res.send(err);
        res.json(game_event);
    });
};