const mongoose = require('mongoose')
const Schema = mongoose.Schema

const groupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    standupTime: {
        type: String
    }
})

module.exports = mongoose.model("Group", groupSchema)