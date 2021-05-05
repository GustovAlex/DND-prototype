import React from 'react';
import { IconButton } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ListIcon from '@material-ui/icons/List';
import useStyles from "./stylesSettings"

export default function ControlledOpenSelect({clipPadNamesList, handleChange, name}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.settingsOther}>
      <IconButton className={classes.iconSeeAllClipPads} onClick={handleOpen}>
            <ListIcon />
        </IconButton>
      <FormControl className={classes.formControl}>
        <InputLabel value={name} id="demo-controlled-open-select-label">See all your clip pads</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={name}
          onChange={handleChange}
        >
			{clipPadNamesList.map((name) => <MenuItem value={name} key={name}>{name}</MenuItem>)}  
        </Select>
      </FormControl>
    </div>
  );
}