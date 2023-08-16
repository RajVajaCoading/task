const mongoose = require('mongoose')
const { Schema } = mongoose;

const userScema = new Schema({
    name:String,
    email:String,
    username:String,
    contactinfo:Number,
    profilepicture:String
})

module.exports = mongoose.model("users",userScema)