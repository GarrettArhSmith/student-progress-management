import React, { useState } from 'react';
import axios from 'axios'

export const StudentContext = React.createContext()

function StudentProvider(props) {
    const [students, setStudents] = useState([])
    const [student, setStudent] = useState(null)

    function getAllStudents() {
        axios.get("/student")
            .then(res => setStudents(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    function getStudent(studentId) {
        axios.get(`/student/${studentId}`)
            .then(res => setStudent(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <StudentContext.Provider
            value={{
                students,
                getAllStudents,
                student,
                getStudent,
            }}
        >
            {props.children}
        </StudentContext.Provider>
    );
}

export default StudentProvider;