import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    boardContaine: {
        display: "flex",
        fontFamily: "Roboto",
        alignItems: "flex-start"
    },
    clipPadTitle: {
        marginLeft: "30px",
        fontFamily: "Roboto"
    },
    clipColumn: {
        marginLeft: "30px",
        width: "250px",
        padding: "15px",
        background: "#2c79c5",
        borderRadius: "5px",
        height: "fit-content"
    },
    addColumnButton: {
        color: "#2c79c5"
    },
    columnTitle: {
        color: "#fff",
        fontSize: "18px",
        textTransform: "uppercase",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    editColumnButton: {
        color: "#fff"
    },
    editColumnName : {
        fontSize: "12px",
        width: "200px",
        '& label.Mui-focused': {
            color: '#fff',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#fff',
              },
            '&.Mui-focused fieldset': {
              borderColor: '#fff',
            },
            '&:hover fieldset': {
                borderColor: '#fff',
              },
        },
        '& input': {
            padding: "10px",
            fontSize: "14px",
            color: "#fff"
        },
        '& label': {
            color: "#fff",
            fontSize: "10px",
            transform: "translate(25px, 12px) scale(1)"
        }
    },
    clipColumnItem: {
        marginTop:"20px",
        background: "#fff",
        maxHeight: "320px",
        borderRadius: "5px",
        padding: "10px",
        position: 'relative',
        overflow: "hidden"
    },
    addItemButton: {
        color: "#fff"
    },
    imgContainer: {
        height: "fit-content",
        width: "fit-content",
        position: "relative",
        "&:hover":{ 
            "& button": {
                opacity: "1",
                transition: "all 0.3s"
            }
        }
    },
    deleteItemButton: {
        position: 'absolute',
        right: "0",
        top: "0"
    },
    itemImg: {
        height: "100px",
        width: "100px",
    },
    changeImgButton: {
        position: "absolute",
        bottom: "3px",
        right: "5px",
        opacity: "0",
        transition: "all 0.3s"
    },
    inputFile: {
        position: "absolute",
        width: "30px",
        height: "30px",
        opacity: "0",
    },
    itemText: {
        overflow: "hidden",
        fontSize: "13px",
        position: "relative",
        "&:hover":{ 
            "& button": {
                opacity: "1",
                transition: "all 0.3s"
            }
        }
    },
    itemTitle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 0",
        "&:hover":{ 
            "& button": {
                opacity: "1",
                transition: "all 0.3s"
            }
        }
    },
    inputItemTitle:{
        fontSize: "12px",
        width: "200px",
        '& input': {
            padding: "5px",
            fontSize: "14px",
        },
        '& label': {
            transform: "translate(25px, 8px) scale(1)"
        }
    },
    editItemTileButton: {
        opacity: "0",
        transition: "all 0.3s",
        height: "10px",
        width: "10px"
    },
    itemLink: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 0 20px",
        fontSize: "13px",
        maxWidth: "230px",
        "& a": {
            maxWidth: "230px"
        }
    },
    inputLink:{
        fontSize: "12px",
        width: "200px",
        '& input': {
            padding: "5px",
            fontSize: "14px",
        },
        '& label': {
            transform: "translate(25px, 8px) scale(1)"
        }
    },
}))

export default useStyles 