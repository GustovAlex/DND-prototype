import { IconButton } from '@material-ui/core';
import Switches from '../common/Switch'
import useStyles from './stylesSettings'
import SecurityIcon from '@material-ui/icons/Security';

export default function Pravicy() {
    const classes = useStyles()
    return (
        <>
            <div className={classes.settingsFlex}> 
                <IconButton className={classes.iconAddUser}>
                    <SecurityIcon />
                </IconButton>                    
                <p className={classes.titleAddUser}>Privaci settings</p>
            </div>
            <div className={classes.settingsFlexCenter}> 
                <p className={classes.privaceText}>Private</p>
                <Switches/>
                <p className={classes.privaceText}>Public</p>
            </div>
        </>
    )
}