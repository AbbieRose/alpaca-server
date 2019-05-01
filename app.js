var express = require("express")
var cors = require('cors')
var app = express();
app.use(cors())
var port = process.env.PORT || 3030;
var mongoose = require('mongoose');
var GameEvent = require('./models/eventModel');
var Score = require('./models/outputModel');
var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/AlpacaDB');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
/*app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});*/

var routes = require('./routes/alpacaRoutes');
routes(app);

app.listen(port);

console.log('alpaca-server started on: ' + port);