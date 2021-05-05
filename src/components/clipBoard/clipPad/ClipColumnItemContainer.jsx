import { useState } from 'react'
import ClipColumnItem from './ClipColumnItem'
import {useDispatch} from "react-redux" 
import {changeItem, deleteItem} from '../../../redux/actions/index'
import {useHistory} from 'react-router-dom'

export default function ClipColumnItemContainer({item, index, items}) {

    const defaultLink = useHistory().location.pathname

    const dispatch = useDispatch()
    const [itemTitle, setItemTitle] = useState(item.itemTitle)
    const [itemText, setItemText] = useState(item.itemText)
    const [isEditItem, setEditItemTitle] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [itemLink, setItemLink] = useState(defaultLink)

    const onChangeLink = (e) => setItemLink(e.target.value)
    const onChangeText = (e) => setItemText(e.target.value)
    const onChangeTitle = (e) => setItemTitle(e.target.value)
    const onCLickToggleEditItem = () => setEditItemTitle(!isEditItem)
    
    const onClickCancelEditItem = () => {
        setItemTitle(item.itemTitle)
        setItemText(item.itemText)
        setEditItemTitle(!isEditItem)
    }
    const onAcceptChenges = () => {
        setEditItemTitle(!isEditItem)
        dispatch(changeItem(chengeItemInfo(positionInItemArr, chengedItem)))
    }

    const positionInItemArr = items.map((i) => { return i.id; }).indexOf(item.id)
    const chengeItemInfo = (index, newItem) => items.splice(index, 1, newItem)
    const removeItem = (index) => items.splice(index, 1)

    const chengedItem = {
        id: item.id,
        itemTitle: itemTitle,
        itemText: itemText,
        img: item.img,
    }

    // console.log("chengedItem", chengedItem)
    const onOpenHandler = () => setIsOpenModal(true)
    const onCloseHandler = () => setIsOpenModal(false)
    const onCloseAndAcceptDeleteItem = () => {
        setIsOpenModal(false)
        dispatch(deleteItem(removeItem(positionInItemArr)))
    }

    return(<ClipColumnItem 
            itemText={itemText} 
            onChangeText={onChangeText}
            onClickCancelEditItem={onClickCancelEditItem}
            index={index}
            item={item}
            isEditItem={isEditItem}
            onCLickToggleEditItem={onCLickToggleEditItem}
            isOpenModal={isOpenModal}
            onOpenHandler={onOpenHandler}
            onCloseHandler={onCloseHandler}
            itemTitle={itemTitle}
            onChangeTitle={onChangeTitle}
            onAcceptChenges={onAcceptChenges}
            onCloseAndAcceptDeleteItem={onCloseAndAcceptDeleteItem}
            itemLink={itemLink}
            defaultLink={defaultLink}
            onChangeLink={onChangeLink}
            />)
}