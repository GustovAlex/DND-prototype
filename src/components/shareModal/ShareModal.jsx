import React from 'react';
import { Modal, Backdrop, Fade, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import LinkIcon from '@material-ui/icons/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import RedditIcon from '@material-ui/icons/Reddit';
import useStyles from './stylesShareModal'

export default function ShareMadal({ handleClose, open }) {
    const classes = useStyles()
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
                <div>
                  <IconButton onClick={handleClose} >
                    <CloseIcon className={classes.closeButton}/>
                  </IconButton>
                </div>
                <h2 id="transition-modal-title" className={classes.modalTitle}>Share your clip pad</h2>
                <p id="transition-modal-description">Select yor favorite social platform</p>
                <IconButton onClick={handleClose}>
                    <LinkIcon/>
                </IconButton>
                <IconButton onClick={handleClose} >
                    <FacebookIcon/>
                </IconButton>
                <IconButton onClick={handleClose} >
                    <TwitterIcon/>
                </IconButton>
                <IconButton onClick={handleClose} >
                    <LinkedInIcon/>
                </IconButton>
                <IconButton onClick={handleClose} >
                    <PinterestIcon/>
                </IconButton>
                <IconButton onClick={handleClose} >
                    <RedditIcon/>
                </IconButton>
              </div>
            </Fade>
          </Modal>
        </div>
    );
}