import React from 'react';
import { makeStyles, InputLabel, MenuItem, Select, FormControl, Container } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState(10);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div style={{display: "flex", placeItems: "center"}}>
        {/* <Typography variant="subtitle1">Time Range</Typography> */}
        <InputLabel id="demo-controlled-open-select-label">
            <CalendarTodayIcon />
        </InputLabel>
        <Container justify="center" style={{padding: 0}}>
        <FormControl className={classes.formControl}>
            <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={age}
                onChange={handleChange}
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Today</MenuItem>
            <MenuItem value={20}>This Week</MenuItem>
            <MenuItem value={30}>This Month</MenuItem>
            <MenuItem value={40}>This Year</MenuItem>
            <MenuItem value={50}>Past 7 days</MenuItem>
            <MenuItem value={60}>Past 28 days</MenuItem>
            <MenuItem value={70}>Past 365 days</MenuItem>
            </Select>
        </FormControl>
        </Container>
    </div>
  );
}