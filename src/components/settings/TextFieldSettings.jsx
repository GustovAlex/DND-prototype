import { IconButton, TextField } from '@material-ui/core';
import useStyles from './stylesSettings'

export default function TextFieldSettings({defaultValue, label, IconComponent, onChange}) {
    const classes = useStyles()
    return (
        <div className={classes.settingsOther}>
            <IconButton className={classes.iconEmail}>
                <IconComponent />
            </IconButton>
            <TextField
            className={classes.settingsInput}
            label={label}
            value={defaultValue}
            variant="outlined"
            size="small"
            onChange={onChange}
            />
        </div>  
    )
}