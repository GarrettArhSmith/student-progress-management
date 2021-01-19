const express = require('express')
const groupRouter = express.Router()
const Group = require('../models/group')

//GET ALL GROUPS
groupRouter.get("/", (req, res, next) => {
    Group.find({},
        (err, groups) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(groups)
        })
})

//ADD NEW GROUP
groupRouter.post("/", (req, res, next) => {
    const newGroup = new Group(req.body)
    newGroup.save((err, group) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(group)
    })
})

module.exports = groupRouter