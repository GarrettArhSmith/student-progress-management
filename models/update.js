const mongoose = require('mongoose')
const Schema = mongoose.Schema

const updateSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    goal: {
        type: [Number]
    },
    note: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Update", updateSchema)