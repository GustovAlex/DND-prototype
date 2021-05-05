import React from 'react';
import User from "./User"
import useStyles from "../stylesSettings"
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { Button, IconButton } from '@material-ui/core';
import AddUserModal from './AddUserModal'

export default function UsersList({users, 
    open,
    handleOpen,
    handleClose, 
    handleChangeUserEmail, 
    onClickAddUser
}) {
    const classes = useStyles()
    
    return(
        <>
            <div className={classes.settingsFlex}> 
                <IconButton className={classes.iconAddUser} onClick={handleOpen}>
                    <GroupAddIcon />
                </IconButton>
                <p className={classes.titleAddUser}> Add user for this clip pad </p>
                
            </div>
            {users.map((user) => <User user={user} key={user}/>)}
            <Button className={classes.buttonSend} variant="contained" color="primary">
                Send
            </Button>
            <AddUserModal open={open} 
            handleOpen={handleOpen}
            handleClose={handleClose} 
            handleChangeUserEmail={handleChangeUserEmail}
            onClickAddUser={onClickAddUser}
            />
        </>
    )
}