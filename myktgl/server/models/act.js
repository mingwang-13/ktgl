var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var actSchema = new Schema({
    'actid':String,
    'per':String,
    'title':String,
    'content':String,
    'time':String,
    "show":String,
});
module.exports = mongoose.model('act',actSchema);