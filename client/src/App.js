import React, { useState } from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider, createMuiTheme, CssBaseline, makeStyles } from '@material-ui/core';
import { darkTheme, lightTheme } from './themes'

import Topbar from './components/layout/Topbar'
import SideDrawer from './components/layout/SideDrawer'
import Dashboard from './components/pages/Dashboard'
import Groups from './components/pages/Groups'
import StudentPage from './components/pages/StudentPage'

function App() {
    const [theme, setTheme] = useState("dark")

    const light = createMuiTheme(lightTheme)
    const dark = createMuiTheme(darkTheme)

    function toggleTheme() {
        setTheme(prev => prev === "light" ? "dark" : "light")
    }

    const useStyles = makeStyles((theme) => ({
        content: {
          flexGrow: 1,
          padding: theme.spacing(3),
          textAlign: "left",
          marginLeft: 240
        }
    }));
    const classes = useStyles()

    return (
        <ThemeProvider theme={theme === "light" ? light : dark}>
        <div className="App">
        <CssBaseline />

            <Topbar toggleTheme={toggleTheme} theme={theme} />
            <SideDrawer />
            <div className={classes.content}>
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route path="/groups">
                        <Groups />
                    </Route>
                    <Route path="/students/:studentId">
                        <StudentPage />
                    </Route>
                </Switch>
            </div>
        </div>
        </ThemeProvider>
    );
}

export default App;
