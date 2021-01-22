import React, { useState, useContext, useEffect } from 'react';
import { Typography, Paper, Grid, makeStyles } from '@material-ui/core'
import { StudentContext } from '../../context/StudentProvider';

import Change from '../pieces/Change'
import Stat from '../pieces/Stat'
import DateRangePicker from '../pieces/DateRangePicker'
import BreadcrumbNav from '../layout/BreadcrumbNav'
import LineGraph from '../pieces/LineGraph'

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
    },
    dateRangerPicker: {
        display: "grid",
        placeItems: "center",
    }
}));

const data = [
    { argument: 1, value: 10 },
    { argument: 2, value: 20 },
    { argument: 3, value: 100 },
    { argument: 4, value: 40 },
    { argument: 5, value: 45 },
    { argument: 6, value: 30 },
    { argument: 7, value: 45 },
    { argument: 8, value: 55 },
  ];

function Dashboard(props) {
    const classes = useStyles();
    const { students, getAllStudents } = useContext(StudentContext)
    const [dateRange, setDateRange] = useState([new Date(), new Date()])

    useEffect(() => {
        getAllStudents()
    }, [])

    return (
        <div>
            <BreadcrumbNav />
            <Grid container spacing={3}>
                <Grid item xs={4} sm={5} md={8} lg={9}>
                    <Typography variant="h4">Reports</Typography>
                </Grid>
                <Grid item xs={8} sm={7} md={4} lg={3}>
                    <Paper className={classes.dateRangerPicker}>
                        <DateRangePicker />
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
                <Grid item xs={3}>
                <Paper className={classes.paper} style={{height: 532}}>
                    
                </Paper>
                </Grid>
                <Grid item xs={9}>
                <Paper className={classes.paper}>
                    <LineGraph data={data} />
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
            </Grid>
        </div>
    );
}

export default Dashboard;