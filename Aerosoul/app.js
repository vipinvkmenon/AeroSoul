

var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan')('dev');
var mongoose = require('mongoose');
var models = require('./mongoModels/SymptomsList')();
var Location = mongoose.model('Symptoms');

var app = express();
var server = require('http').createServer(app);

// Bootstrap mongoose and load dummy data
mongoose.connect('mongodb://localhost/geospatial_db', function(err) {
  if (err) throw err;

  // load data from file and transform it to Object
 /* var data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'));

  // clean db and load new data
  Location.remove(function() {
    async.each(data, function(item, callback) {
      // create a new location
      Location.create(item, callback);
    }, function(err) {
      if (err) throw err;
    });
  });
*/
});

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