import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import useStyles from './stylesNavbarModal'
import { Button, TextField } from '@material-ui/core';

export default function NavbarModal({open, handleClose, onClickAddClipPad, onChengeClipPadTitle}) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" className={classes.title}>Create new clip pad</h2>
            <TextField id="outlined-basic" className={classes.input} label="Clip pad name" variant="outlined" onChange={onChengeClipPadTitle}/>
			<Button variant="contained" color="primary" className={classes.addModalButton} onClick={onClickAddClipPad} >
  				Add clip pad
			</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}