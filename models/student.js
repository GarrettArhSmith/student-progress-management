const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    group: {
        type: Schema.Types.ObjectId,
        ref: "Group",
        required: true
    },
    progress: {
        type: [Number],
        required: true
    },
    startDate: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model("Student", studentSchema)