import React, { useContext, useEffect } from 'react';
import { Typography, Paper, Grid, makeStyles } from '@material-ui/core'
import { StudentContext } from '../../context/StudentProvider';


import Change from '../pieces/Change'
import Stat from '../pieces/Stat'
import BreadcrumbNav from '../layout/BreadcrumbNav'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    subtitle: {
        color: "#adb0bb",
        fontSize: "0.85em"
    }
}));

function Dashboard(props) {
    const classes = useStyles();
    const { students, getAllStudents } = useContext(StudentContext)

    useEffect(() => {
        getAllStudents()
    }, [])

    return (
        <div>
            <BreadcrumbNav />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4">Reports</Typography>
                </Grid>
                <Grid item xs={12}>
                <Paper className={classes.paper}>

                </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                
                </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                
                </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>
                    <Typography 
                        variant="subtitle2" 
                        className={classes.subtitle}
                    >SLACK ATTENDANCE</Typography>
                    <Stat stat={students.length} includeChange />
                </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>
                <Typography 
                        variant="subtitle2" 
                        className={classes.subtitle}
                    >ZOOM ATTENDANCE</Typography>
                    <Stat stat={students.length} includeChange />
                </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>
                    <Typography 
                        variant="subtitle2" 
                        className={classes.subtitle}
                    >ATTENDANCE RATIO</Typography>
                    <Stat stat={students.length} includeChange />
                </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>
                <Typography 
                        variant="subtitle2" 
                        className={classes.subtitle}
                    >STUDENTS</Typography>
                    <Stat stat={students.length} />
                </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Dashboard;