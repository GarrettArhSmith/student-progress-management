import React from 'react';
import { Typography, makeStyles } from '@material-ui/core'

import Change from './Change'

const useStyles = makeStyles((theme) => ({
    stat: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gridGap: 10
    }
}));

function Stat({ stat, includeChange }) {
    const classes = useStyles()
    return (
        <Typography 
            variant="h4"
            className={classes.stat}
        >
            {stat}
            {includeChange && <Change />}
        </Typography>
    );
}

export default Stat;