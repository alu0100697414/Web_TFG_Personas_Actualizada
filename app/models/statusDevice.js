// statusDevice Class
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var statusDeviceSchema = new Schema({
    mac: String,        // MAC
    name:  String,      // Name of the user
    number: String,     // Numberphone of the user
    latitude: String,   // Latitude
    longitude: String,  // logitud
    distance: Number,   // Distance between victim and aggressor
    battery: String      // Batery level of the user
});


//Export the schema
module.exports = mongoose.model('statusDevice', statusDeviceSchema);
