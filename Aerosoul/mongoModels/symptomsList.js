var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationModel = function() {


  var LocationSchema = new Schema({
    Symptoms: [{
  		Symptom:String,
  		Rating: {type: Number, default:0}
  }],
    loc: {
      type: [Number],   // format will be [ <longitude> , <latitude> ]
      index: '2d'       // create the geospatial index
    }
  });


  // register the mongoose model
  console.log('Its happening');
  mongoose.model('Symptoms', LocationSchema);
};

// create an export function to encapsulate the model creation
module.exports = LocationModel;