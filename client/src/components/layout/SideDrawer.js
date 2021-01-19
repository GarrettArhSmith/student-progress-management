import React from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { Drawer, Toolbar, List, ListItem, ListItemText, ListItemIcon, makeStyles } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import TimelineIcon from '@material-ui/icons/Timeline';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
        drawerPaper: {
        marginTop: 64,
        width: drawerWidth,
    },
    toolbar: {
        padding: 0,
    },
    list: {
        width: drawerWidth,
    },
    icon: {
    }
}));
  

function SideDrawer(props) {
    const classes = useStyles()
    const { push } = useHistory()
    const { pathname } = useLocation()

    const list1 = [
        {text: 'Dashboard', path: "/", icon: <DashboardIcon color="secondary" />},
        {text: 'Groups', path: "/groups", icon: <GroupIcon color="secondary" />},
        {text: 'Progress', path: "/progress", icon: <TimelineIcon color="secondary" />}
    ]

    return (
        <div>
            <Drawer
                variant="permanent"
                anchor={'left'}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <Toolbar className={classes.toolbar}>
                    <List className={classes.list}>
                        {list1.map(item => {
                            const { text, path, icon } = item
                            return (
                                <ListItem 
                                    button key={text}
                                    onClick={() => push(path)}
                                    selected={path === pathname}
                                >
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>)
                        })}
                    </List>
                </Toolbar>
            </Drawer>
        </div>
    );
}

export default SideDrawer;