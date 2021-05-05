import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import ClipBoard from "./ClipBoard"
import {useDispatch} from "react-redux" 
import {addColumn, setCurrentClipPad} from "../../redux/actions/index"

export default function ClipBoardContainer(props) {
    const { data } = useSelector((state)=> state)
    const { clipPadName } = props.match.params
    const dispatch = useDispatch()
    const targetPad = data[clipPadName]
    const [columns, setColumns] = useState(targetPad.columns)

    useEffect(()=>{
        dispatch(setCurrentClipPad({[clipPadName]: targetPad}))
    }, [data])

    useEffect(()=>{
        setColumns(targetPad.columns)
    }, [clipPadName, data])

    const changedClipPad = {
        emailSettings: targetPad.emailSettings,
        isPrivate: targetPad.isPrivate,
        users: targetPad.users,
        columns
    }

    useEffect(()=>dispatch(addColumn({clipPadName, changedClipPad})), [columns])

    const onClickAddColumn = () => {
        setColumns([...columns, {
                id:`${Date.now()}`,
                columnName: "unnamed",
                items: []
             }
        ])
    }

    function handleOnDragEnd (result) {
       if(!result.destination) return

       if (result.type === "columns") {
        const columnList = Array.from(columns)
        const [reoederedColumn] = columnList.splice(result.source.index, 1)
        columnList.splice(result.destination.index, 0, reoederedColumn)
        setColumns(columnList)
       }

        if(result.destination.droppableId === result.source.droppableId && result.type === "items") {
            const listItems = columns[+result.source.droppableId.split("e")[1]].items
            const [reoederedItem] = listItems.splice(result.source.index, 1)
            listItems.splice(result.destination.index, 0, reoederedItem)
        }

        if(result.destination.droppableId !== result.source.droppableId && result.type === "items") {
            const listItemsStart = columns[+result.source.droppableId.split("e")[1]].items
            const [reoederedItem] = listItemsStart.splice(result.source.index, 1)
            const listItemsEnd = columns[+result.destination.droppableId.split("e")[1]].items
            listItemsEnd.splice(result.destination.index, 0, reoederedItem)
        }
    }

    return <ClipBoard 
        columns={columns} 
        handleOnDragEnd={handleOnDragEnd} 
        clipPadName={clipPadName} 
        onClickAddColumn={onClickAddColumn}
        targetPad={targetPad}
        />
}   