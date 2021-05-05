import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    settingsContainer: {
        fontFamily: "Roboto",
        fontSize: '14px',
    },
    settingsItem: {
       padding: "14px 20px 14px",
       borderBottom: "1px solid #2c79c5",
       width: '410px'
    },
    settingsOther: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: "10px"
    },
    settingsFlex: {
        display: 'flex',
    },
    closeButton: {
        fontSize: 'medium',
        color: '#000',
    },
    settingsTopTitle: {
        paddingRight: '10px',
        marginTop: "10px",
        fontWeight: "500"
    },
    settingsName: {
        marginTop: '10px',
        color: '#2c79c5',
    },
    settingsInput: {
        '& label.Mui-focused': {
            color: '#2c79c5',
            
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#2c79c5',

            },
          },
    },
    settingsTitle: {
        marginBottom: '10px',
    },
    iconEmail: {
        color: '#2c79c5'
    },
    iconAddUser: {
        marginTop: '0',
       color: '#2c79c5',
    },
    titleAddUser: {
        marginTop: '15px',
    },
    iconPlusMinus: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    userStatus: {
        marginTop: '10px',
    },
    buttonSend: {
        display: 'block',
        margin: '0 auto',
    },
    settingsFlexCenter: {
        display: 'flex',
        justifyContent: 'center',
    },
    privaceText: {
        marginTop: '10px',
    },
    buttonconfirm: {
       display:"block",
       margin: "15px auto",
       width: "200px"
    },
    // button: {
    //     display: 'block',
    //     marginTop: theme.spacing(2),
    //   },
    formControl: {
        marginTop: '10px',
        width: "200px",
      },
    iconSeeAllClipPads: {
        marginTop: '20px',
        color: '#2c79c5',
      },
      
}))

export default useStyles