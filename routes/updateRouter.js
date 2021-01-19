const express = require('express')
const { update } = require('../models/update')
const updateRouter = express.Router()
const Update = require('../models/update')

//GET ALL UPDATES BY STUDENT
updateRouter.get("/:studentId", (req, res, next) => {
    Update.find({ student: req.params.studentId },
        (err, updates) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updates)
        })
})

//GET STANDUPS BY STUDENT
updateRouter.get("/standup/:studentId", (req, res, next) => {
    Update.find({ student: req.params.studentId, standup: true },
        (err, standups) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(standups)
        })
})

//CREATE NEW UPDATE
updateRouter.post("/:studentId", (req, res, next) => {
    req.body.student = req.params.studentId
})

module.exports = updateRouter