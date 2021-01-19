const { resolveNaptr } = require('dns')
const express = require('express')
const studentRouter = express.Router()
const Student = require('../models/student')

//GET ALL STUDENTS
studentRouter.get("/", (req, res, next) => {
    Student.find({}, (err, students) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(students)
    })
})

//GET STUDENTS BY GROUP
studentRouter.get("/group/:groupId", (req, res, next) => {
    Student.find({ group: req.params.groupId },
        (err, students) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(students)
        })
})

//GET ONE STUDENT
studentRouter.get("/:studentId", (req, res, next) => {
    Student.findOne({ _id: req.params.studentId },
        (err, student) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(student)
        })
})

//ADD NEW STUDENT
studentRouter.post("/:groupId", (req, res, next) => {
    req.body.group = req.params.groupId
    const newStudent = new Student(req.body)
    newStudent.save((err, student) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(student)
    })
})

//UPDATE STUDENT
studentRouter.put("/:studentId", (req, res, next) => {
    Student.findByIdAndUpdate({ _id: req.params.studentId },
        req.body,
        { new: true },
        (err, updatedStudent) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedStudent)
        })
})

//DELETE STUDENT
studentRouter.delete("/:studentId", (req, res, next) => {
    Student.findOneAndDelete({ _id: req.params.studentId },
        (err, deletedStudent) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(deletedStudent)
        })
})

module.exports = studentRouter