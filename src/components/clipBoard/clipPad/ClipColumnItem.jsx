import useStyles from "../styleClipBoard"
import { Draggable } from 'react-beautiful-dnd';
import { Paper, IconButton, TextareaAutosize, TextField } from "@material-ui/core"
import CreateIcon from '@material-ui/icons/Create';
import DoneIcon from '@material-ui/icons/Done';
import BlockIcon from '@material-ui/icons/Block';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ActionModal from '../../common/ActionModal'
import UploudImg from './UploadImg'

export default function ClipColumnItem({
    item, 
    index,
    itemText,
    onChangeText,
    onClickCancelEditItem,
    isEditItem,
    onCLickToggleEditItem,
    isOpenModal,
    onOpenHandler,
    onCloseHandler,
    onChangeTitle,
    itemTitle,
    onAcceptChenges,
    onCloseAndAcceptDeleteItem,
    itemLink,
    defaultLink,
    onChangeLink
}) {
    const classes = useStyles()

    return(
        <>
        <Draggable draggableId={item.id} index={index}>
            {(provided)=>(
               
                <Paper  className={classes.clipColumnItem} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}> 
                    <IconButton className={classes.deleteItemButton} onClick={onOpenHandler}>
                        <DeleteForeverIcon />
                    </IconButton>
                    <div className={classes.imgContainer}>
                        <UploudImg defaultImg={item.img}/>
                    </div>
                    <div className={classes.itemTitle}>
                        {!isEditItem ? 
                        <>
                        <h5>{itemTitle}</h5> 
                        <IconButton className={classes.editItemTileButton} onClick={onCLickToggleEditItem}>
                            <CreateIcon />
                        </IconButton>
                        </>
                        :
                        <TextField 
                        className={classes.inputItemTitle}
                        defaultValue={itemTitle}
                        label="Edit Item"
                        variant="outlined"
                        onChange={onChangeTitle}
                        />
                        }
                    </div>
                    <div className={classes.itemLink}>
                        {!isEditItem ? 
                        <a href={itemLink}>{itemLink === defaultLink ? "add your link" :  itemLink}</a> 
                        :
                        <TextField 
                        className={classes.inputLink}
                        defaultValue="add your link"
                        label="Edit Link"
                        variant="outlined"
                        onChange={onChangeLink}
                        />
                        }
                    </div>
                    <div className={classes.itemText}>
                        {!isEditItem ? <p>{itemText}</p> :
                        <>
                            <TextareaAutosize
                            rowsMax={4}
                            style={{width:"220px"}}
                            defaultValue={itemText}
                            onChange={onChangeText}
                            />
                            <div className={classes.buttonSection} >
                                <IconButton onClick={onAcceptChenges}>
                                    <DoneIcon />
                                </IconButton>
                                <IconButton onClick={onClickCancelEditItem}>
                                    <BlockIcon />
                                </IconButton>
                            </div>
                        </>
                        }
                    </div>
                </Paper>
                
            )}
        </Draggable>
        <ActionModal open={isOpenModal} handleClose={onCloseHandler} onCloseAndAcceptDeleteItem={onCloseAndAcceptDeleteItem} attentionTitle={"Are you sure"} attentionMessage={"Do you want delete Item?"}/>
        </>
    )
}