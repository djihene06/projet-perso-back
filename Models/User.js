const mongoose = require("mongoose");

const UserShema = mongoose.Schema({
    username : { type: String, required: true},
    email : { type: String, required: true},
    password : { type: String, required: true},
    age : {type: String},
    tel : { type: String},
    admin : { type: Boolean}
})