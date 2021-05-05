import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import useStyles from './stylesActionModal'
import Button from '@material-ui/core/Button';


export default function ActionModal({handleClose,
   open,
   attentionTitle,
   attentionMessage, 
   onAcceptDeleteColumnHandler, 
   onCloseAndAcceptDeleteItem}) {
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
            <h2 id="transition-modal-title" className={classes.modalTitle}>{attentionTitle ? attentionTitle : "here must be title"}</h2>
            <p id="transition-modal-description">{attentionMessage ? attentionMessage : "here must be message"}</p>
			<Button variant="contained" className={classes.buttonAccept} onClick={onAcceptDeleteColumnHandler || onCloseAndAcceptDeleteItem}>
 				Yes, delete it!
			</Button>
			<Button variant="contained"  color="secondary" onClick={handleClose}>
  				Cancel
			</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}