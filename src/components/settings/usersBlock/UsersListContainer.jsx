import React from 'react';
import UsersList from './UsersList'
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addUser} from '../../../redux/actions/index'

export default function UsersListContainer ({users}) {
	const dispatch=useDispatch()
	const [open, setOpen] = React.useState(false);
	const [userEmail, setUserEmail] = useState("")
	const handleChangeUserEmail = (e) => {
		setUserEmail(e.target.value)
	  }

	const onClickAddUser = () => {
		if (userEmail !== "") {
			users.push(userEmail)
		}
		dispatch(addUser(users))
		handleClose()
		console.log("IN ONCLICK")
	}

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
	return (<UsersList open={open}
		handleOpen={handleOpen}
		handleClose={handleClose}
		users={users}
		handleChangeUserEmail={handleChangeUserEmail}
		onClickAddUser={onClickAddUser}
		/>
	)
}