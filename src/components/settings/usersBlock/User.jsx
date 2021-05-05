import useStyles from "../stylesSettings"
import { TextField } from '@material-ui/core';

export default function User({user}) {
	const classes = useStyles()

	return(
		<div className={classes.settingsOther}>
            <p className={classes.userStatus}>status - uninvited</p>
            <TextField
            className={classes.settingsInput}
            label="Email"
            defaultValue={user}
            variant="outlined"
            size="small"
            />
            
        </div>
        
	)
 
}


