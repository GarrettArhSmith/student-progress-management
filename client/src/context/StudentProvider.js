import React, { useState } from 'react';
import axios from 'axios'

export const StudentContext = React.createContext()

function StudentProvider(props) {
    const [students, setStudents] = useState([])

    function getAllStudents() {
        axios.get("/student")
            .then(res => setStudents(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <StudentContext.Provider
            value={{
                students,
                getAllStudents
            }}
        >
            {props.children}
        </StudentContext.Provider>
    );
}

export default StudentProvider;