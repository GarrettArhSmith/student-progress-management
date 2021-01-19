import React from 'react';
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    change: {
        backgroundColor: "rgba(76, 175, 80, 0.1)",
        color: "#4caf50",
        padding: "1px 7px",
        borderRadius: "3px"
    }
}));

function Change(props) {
    const classes = useStyles()
    return (
        <Typography 
            variant="caption" 
            className={classes.change}
        >+12%</Typography>
    );
}

export default Change;