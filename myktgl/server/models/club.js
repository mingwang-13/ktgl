var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var clubSchema = new Schema({
    'clubid':{
        type:String
    },
    'clubname':String,
    'introduction':String,
    "person":Array
});
module.exports = mongoose.model('club',clubSchema);