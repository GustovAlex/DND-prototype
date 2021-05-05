import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontFamily: 'Roboto'
	  },
	  paper: {
		backgroundColor: theme.palette.background.paper,
		border: 'none',
		outline: 'none',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		textAlign: 'center',
		textTransform: 'uppercase'
	  },
	  modalTitle: {
		margin: '20px 20px',
	  },
	  buttonAccept: {
		  color: '#fff',
		  backgroundColor: '#2c79c5',
		  margin: '20px 20px',
	  },
	  buttonCancel: {
		marginLeft: '20px 20px',
	}
}))

export default useStyles