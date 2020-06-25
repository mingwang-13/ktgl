var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    'userid':String,
    'username':String,
    'password':String,
    "adminer":Boolean,
});
module.exports = mongoose.model('User',userSchema);