const mongoose = require('mongoose')
const Schema = mongoose.Schema

const updateSchema = new Schema({
    standup: {
        type: Boolean,
        required: true
    },
    attendance: {
        type: String,
        enum: ['slack', 'zoom', 'miss', 'n/a'],
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    stage: {
        type: Number,
    },
    level: {
        type: Number,
    },
    progressPoint: {
        type: Number,
    },
    goalStage: {
        type: Number,
    },
    goalLevel: {
        type: Number,
    },
    goalProgressPoint: {
        type: Number,
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