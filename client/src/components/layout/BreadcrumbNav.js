import React from 'react';
import { Breadcrumbs, Link, Typography, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    link: {
        '&:hover': {
            cursor: "pointer"
        }
    },
    breadCrumb: {
        padding: "0 0 15px 0"
    }
}))

function BreadcrumbNav({student}) {
    const classes = useStyles()
    const { push, location: { pathname } } = useHistory()
    const pathArr = pathname.split("/").filter(x => x)

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb" className={classes.breadCrumb}>
                    {pathArr.length > 0 ? 
                        <Link 
                            color="inherit" 
                            onClick={() => push("/")}
                            className={classes.link}
                        >
                            Dashboard
                        </Link> : 
                        <Typography 
                            color="textPrimary" 
                        >
                            Dashboard
                        </Typography>}


                    {pathArr.map((name, i) => {
                        const upperCaseName = name[0].toUpperCase() + name.substring(1)
                        if(i === pathArr.length-1) {
                            return <Typography 
                                color="textPrimary" 
                                key={name}
                            >
                                {student ? student : upperCaseName}
                            </Typography>
                        }
                        const routeTo = `/${pathArr.slice(0, i+1).join("/")}`
                        return <Link 
                            color="inherit" 
                            onClick={() => push(routeTo)} 
                            key={name} 
                            className={classes.link}
                        >
                            {upperCaseName}
                        </Link>
                    })}
            </Breadcrumbs>
        </div>
    );
}

export default BreadcrumbNav;