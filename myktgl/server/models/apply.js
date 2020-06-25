var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var applySchema = new Schema({
    'applyid':String,
    'applyName':String,
    "clubList":Array,
    'class':String
});
module.exports = mongoose.model('apply',applySchema);