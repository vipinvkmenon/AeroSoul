

var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan')('dev');

var app = express();
var server = require('http').createServer(app);


app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With', 'user', 'city', 'office');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    next();
});



require('./routes')(app);




app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3005);
app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP || 'localhost');

    

server.listen(app.get('port'),  function() {
    console.log('System Up on IP/hostname: "' + app.get('ipaddr') + '" and port: "' + app.get('port') + '\"\n');
});


module.exports = app;