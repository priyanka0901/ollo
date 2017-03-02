'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://example:example@ds139665.mlab.com:39665/ollo');
var Schema = mongoose.Schema;

var msgSchema = new Schema({
    firstname: String,
    lastname: String,
    age: String,
    dateofbirth: String,
    gender: String,
    phone: String,
    text: String
});
console.log(msgSchema);

var Msg = mongoose.model('Msg', msgSchema);
console.log(Msg);

module.exports = Msg;