const mongoose = require("mongoose");

const userInfoSchema = new mongoose.Schema({

    firstName: {
        type: String
    },    
    lastName: {
        type: String
    },
    address: {
        type: String
    },    
    number: {
        type: String
    },    
    gender: {
        type: String
    },    
    email: {
        type: String
    },
    dateOfAddition: {
        type: Date,
        default: Date.now()
    },
})

module.exports = mongoose.model("userInfoSchema",userInfoSchema,"personalData");