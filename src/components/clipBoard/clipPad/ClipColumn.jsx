import useStyles from "../styleClipBoard"
import ClipColumnItemContainer from "./ClipColumnItemContainer"
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Paper, IconButton, TextField } from "@material-ui/core"
import CreateIcon from '@material-ui/icons/Create';
import DoneIcon from '@material-ui/icons/Done';
import BlockIcon from '@material-ui/icons/Block';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ActionModal from '../../common/ActionModal'

export default function ClipColumn({
    index, 
    onChangeName,
    onClickCancelEdit,
    onAcceptButtonHandler,
    onEditButtonHandler,
    onClickAddItem,
    onOpenHandler,
    onCloseHandler,
    isOpenModal,
    isOpenEditName,
    columnName,
    items,
    columnId,
    onAcceptDeleteColumnHandler
}) {
    const classes = useStyles()
    return(
        <>
        <Draggable draggableId={columnId} index={index}>
            {(provided)=>(
            <Paper className={classes.clipColumn} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <h4 className={classes.columnTitle}>
                        {!isOpenEditName ? 
                        <>
                            <span> {columnName} </span> 
                            <div>
                                <IconButton className={classes.editColumnButton} onClick={onEditButtonHandler}>                            
                                    <CreateIcon/>
                                </IconButton>
                                <IconButton className={classes.editColumnButton} onClick={onOpenHandler}>                            
                                    <DeleteForeverIcon />
                                </IconButton>
                            </div>
                        </>:
                        <>
                            <TextField
                            onChange={onChangeName}
                            defaultValue = {columnName}
                            className={classes.editColumnName}
                            label="Enter column name"
                            variant="outlined"
                            /> 
                            <IconButton className={classes.editColumnButton} onClick={onAcceptButtonHandler}>                            
                                <DoneIcon />
                            </IconButton>
                            <IconButton className={classes.editColumnButton} onClick={onClickCancelEdit}>
                                <BlockIcon />
                            </IconButton>
                        </>} 
                    </h4>
                    <Droppable droppableId={`columnDroppable${index}`} type="items">
                        {(provided)=>(
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {items.map((item, index)=> <ClipColumnItemContainer 
                                                        key={item.id} 
                                                        item={item} 
                                                        items={items}
                                                        index={index}
                                                        />)}
                            {provided.placeholder}
                        </div>
                        )}
                    </Droppable>
                    <IconButton className={classes.addItemButton} onClick={onClickAddItem}>
                        <AddIcon />  
                    </IconButton>
            </Paper>
            )}
        </Draggable>
        <ActionModal open={isOpenModal} handleClose={onCloseHandler} onAcceptDeleteColumnHandler={onAcceptDeleteColumnHandler} attentionTitle={"Are you sure"} attentionMessage={"Do you want delete Topic?"}/>
        </>
    )
}