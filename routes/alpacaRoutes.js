module.exports = function(app) {
    var alpaca = require('../controllers/alpacaController');

    app.route('/score')
    .get(alpaca.list_score)
    .post(alpaca.update_score);

    app.route('/events')
    .get(alpaca.list_events)
    .post(alpaca.new_event)
};