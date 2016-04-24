var mongoose = require('mongoose');
var Location = mongoose.model('Symptoms');

module.exports = {
  index: function(req, res, next) {
    res.json(200, {
      status: 'Location API is running.',
    });
  },
  findLocation: function(req, res, next) {
    var limit2 = req.query.limit || 10;
    var limit = parseInt(limit2);

    // get the max distance or set it to 8 kilometers
    var maxDistance = req.query.distance || 8;

    // we need to convert the distance to radians
    // the raduis of Earth is approximately 6371 kilometers
    maxDistance /= 6371;

    // get coordinates [ <longitude> , <latitude> ]
    var coords = [];
    coords[0] = req.query.longitude || 0;
    coords[1] = req.query.latitude || 0;

    // find a location
    Location.find({
      loc: {
        $near: coords,
        $maxDistance: maxDistance
      }
    }).limit(limit).exec(function(err, datas) {
      if (err) {
        return res.json(500, err);
      }

      res.json(200, datas);
    });
  },

  findLocAverage: function (req, res) {
  	 var limit =10;
    // get the max distance or set it to 8 kilometers
    var maxDistance = 5;

    // we need to convert the distance to radians
    // the raduis of Earth is approximately 6371 kilometers
    maxDistance /= 6371;

    // get coordinates [ <longitude> , <latitude> ]
    var coords = [];
    coords[0] = req.query.longitude || 0;
    coords[1] = req.query.latitude || 0;

    // find a location
    Location.find({
      loc: {
        $near: coords,
        $maxDistance: maxDistance
      }
    }).limit(limit).exec(function(err, datas) {
      if (err) {
        return res.json(500, err);
      }

      console.log(datas);
      for (var id=0;datas.length;){
      	var Symptoms = datas[id];

      }
      res.json(200, datas);
    });
  	
  }
};