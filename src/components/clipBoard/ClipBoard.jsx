import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import ClipColumnContainer from './clipPad/ClipColumnContainer'
import React from 'react'
import useStyles from './styleClipBoard'
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export default function ClipBoard({columns, handleOnDragEnd, clipPadName, onClickAddColumn, targetPad}) {
    const classes = useStyles()
    
    return(
        <div>
            <h1 className={classes.clipPadTitle}>{clipPadName}</h1>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="mainDroppable"  direction="horizontal" type="columns">
                    {(provided) => (
                        <div className={classes.boardContaine} {...provided.droppableProps} ref={provided.innerRef}>
                            {columns.map((column, index) => <ClipColumnContainer 
                                                            key={column.id} 
                                                            column={column} 
                                                            index={index} 
                                                            targetPad={targetPad}
                                                            clipPadName={clipPadName}
                                                            />)}
                            {provided.placeholder}
                            <IconButton className={classes.addColumnButton} onClick={onClickAddColumn}>
                                <AddIcon />
                            </IconButton>
                        </div>
                    )}
                </Droppable>
                
            </DragDropContext>
            
        </div>
    )
}   