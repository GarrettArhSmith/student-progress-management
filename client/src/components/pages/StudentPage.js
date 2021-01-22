import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { StudentContext } from '../../context/StudentProvider'
import { Typography, Grid, Paper, makeStyles } from '@material-ui/core'

import BreadcrumbNav from '../layout/BreadcrumbNav'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
    },
    subPaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: theme.palette.background.subPaper,
        margin: "20px 0",
        transition: "0.2s ease",
        '&:hover': {
            transform: "scale(1.01)",
            filter: "brightness(0.9)"
            // backgroundColor: theme.palette.background.subPaperHover
        }
    },
    subtitle: {
        color: "#adb0bb",
        fontSize: "0.85em"
    },
}));

function StudentPage(props) {
    const classes = useStyles()
    const { studentId } = useParams()
    const { 
        getStudent,
        student } = useContext(StudentContext)

    useEffect(() => {
        getStudent(studentId)
    }, [])

    return (
        <div>
            <BreadcrumbNav student={`${student?.firstName} ${student?.lastName}`} />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4">{student?.firstName} {student?.lastName}</Typography>
                        <Typography 
                            variant="subtitle1" 
                            className={classes.subtitle}
                        >LEVEL: <span style={{fontWeight: "bold"}}>{student?.progress[1]}</span></Typography>
                        <Typography 
                            variant="subtitle1"
                            className={classes.subtitle}
                        >PROGRESS POINT: <span style={{fontWeight: "bold"}}>{student?.progress[2]}</span></Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default StudentPage;