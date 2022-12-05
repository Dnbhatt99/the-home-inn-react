const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isHost: {
        type: Boolean,
        required: true
    }

})

module.exports = mongoose.model('Userprofile',userSchema)