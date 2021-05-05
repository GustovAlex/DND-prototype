import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    navbar: {
        background: "#2c79c5",
        minHeight: "100vh",
        boxSizing: "border-box",
        width: "8vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "100px",
        boxShadow: "4px 0px 8px 0px rgba(34, 60, 80, 0.2)",
    },
    navbarList: {
        listStyleType: "none",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0",
        "& a": {
            color: "#fff",
        },
        "& button": {
            color: "#fff"
        }
    },
    link: {
        fontSize: "18px",
        textDecoration: "none",
        color: "#000",
        transition: "all 0.3s ease-in",
        "&:hover": {
            color: "#2c79c58c",
            transition: "all 0.3s ease-in",
        }
    },
    activeLink: {
        color: "#2c79c5",
        transition: "all 0.3s ease-in",
    },
    addButton: {
        display: "block",
        margin: "0 auto",
    },
}))

export default useStyles