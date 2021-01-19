import React, { useContext, useEffect } from 'react';
import { Typography, Grid, Paper, makeStyles } from '@material-ui/core'
import { Droppable, Draggable } from 'react-beautiful-dnd';

import BreadcrumbNav from '../layout/BreadcrumbNav'
import { GroupContext } from '../../context/GroupProvider';
import { StudentContext } from '../../context/StudentProvider';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    subPaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: theme.palette.background.subPaper,
        margin: "20px 0"
    },
    subtitle: {
        color: "#adb0bb",
        fontSize: "0.85em"
    }
}));

function Groups(props) {
    const classes = useStyles()
    const { groups, getAllGroups } = useContext(GroupContext)
    const { students, getAllStudents } = useContext(StudentContext)
    let studentIndex

    useEffect(() => {
        getAllGroups()
        getAllStudents()
    }, [])

    return (
        <div>
            <BreadcrumbNav />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4">Student Groups</Typography>
                </Grid>
                {groups?.map(group => (
                    <Grid item xs={12} sm={12} md={12/groups.length} key={group._id}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6">{group.name}</Typography>
                        <Typography variant="subtitle1">{students.filter(student => student.group === group._id).length}</Typography>
                        {students.map(student => student.group === group._id && (
                            <Paper 
                                key={student._id}
                                className={classes.subPaper}
                            >
                                <Typography variant="body1">{student.firstName} {student.lastName}</Typography>
                            </Paper>
                        ))}
                    </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Groups;