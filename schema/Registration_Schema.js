var mongoose = require('mongoose')
var schema = mongoose.Schema

var register_Schema = new schema({
    Name:
    {
        type: String,
        required: true
    },
    Address:
    {
        type: String,
        required: true
    },
    Email:
    {
        type: String,
        required: true
    },
    Birth_Date:
    {
        type: Date,
        required: true
    },
    Gender:
    {
        type: String,
        required: true
    },
    Age:
    {
        type: Number,
        required: true
    },
    Mobile_Number:
    {
        type: Number,
        required: true
    },
    Password:
    {
        type: String,
        required: true
    },
    Confirm_Password:
    {
        type:String,
        required:true
    }
}, { collection: 'register_Schema', timestamps: true })

module.exports = mongoose.model("register_Schema", register_Schema);