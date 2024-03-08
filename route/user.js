const mongoose = require('mongoose')
const plm = require("passport-local-mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/instgram');

const mongooseSchema = mongoose.Schema({
        email: {
                type: String,
                require: true,
                unique: true,
        },
        username: {
                type: String,
                require: true,
        },
        password: {
                type: String,
                require: true,
        },
        Cpassword: {
                type: String,
                require: true,
        }
})

mongooseSchema.plugin(plm)

module.exports = mongoose.model("User", mongooseSchema)

