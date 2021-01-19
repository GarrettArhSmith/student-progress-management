import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, Switch } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    toolBar: {
        justifyContent: "space-between",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    }
}));

function Topbar({ toggleTheme, theme }) {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="sticky" className={classes.appBar} elevation={2}>
                <Toolbar className={classes.toolBar}>
                    <Typography variant="h6">
                        Student Progress Management
                    </Typography>
                    <Switch
                        checked={theme === "dark"}
                        onChange={toggleTheme}
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Topbar;