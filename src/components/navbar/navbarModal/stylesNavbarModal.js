import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
        fontFamily: "Roboto",
		
	  },
	  paper: {
		outline: 'none',
		backgroundColor: theme.palette.background.paper,
		border: 'none',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 8, 3),
	  },
	  title: {
		margin: "20px 0 30px 0",
		textAlign: "center",
	  },
	  input: {
		  width: "300px",
	  },
	  addModalButton: {
		margin: "30px auto 0 auto",
		display: "block",
	  },
}))

export default useStyles