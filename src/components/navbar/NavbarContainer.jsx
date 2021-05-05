import Navbar from "./Navbar"
import { useState } from "react"
import {useHistory} from 'react-router-dom'
import { padsList } from "../../data/padsList"
import { useEffect } from "react"
import {useSelector} from "react-redux"

export default function NavbarContainer(handleOpen) {
    const {data} = useSelector((state) => state )
    const [isDisabled, setIsDisabled] = useState(true)
    const [isOpenSettings, setIsOpenSettings] = useState(false)
    const [isOpenMenuPadsList, setIsOpenMenuPadsList] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isOpenShare, setIsOpenShare] = useState(false)

    const handleOpenShare = () => setIsOpenShare(true)
    const handleCloseShare = () => setIsOpenShare(false)
    const handleOpenModal = () => setIsOpenModal(true)
    const handleCloseModal = () =>  setIsOpenModal(false);
    const history = useHistory()

    const onClickSetDisable = () => setIsDisabled(true)
    const onClickMenuItemHandler = (event) => {
        setIsDisabled(false)
        onClickToggleMenu()
    }
    const onCloseHandler = () => {
        
        setIsOpenMenuPadsList(false)
    }

    const onOpenHandler = () => {
        setIsOpenModal(true)
    }

    const onClickButtonSettingsHandler = () => setIsOpenSettings(!isOpenSettings)
    const onClickToggleMenu = (event) => {
        setIsOpenMenuPadsList(!isOpenMenuPadsList)
        !isOpenMenuPadsList && setAnchorEl(event.currentTarget);
    }

    useEffect(()=>{
        history.location.pathname.includes("/clip-board") && setIsDisabled(false)
    },[])

    return <Navbar 
        onClickSetDisable={onClickSetDisable}
        onClickMenuItemHandler={onClickMenuItemHandler}
        onClickButtonSettingsHandler={onClickButtonSettingsHandler}
        isOpenSettings={isOpenSettings}
        isDisabled={isDisabled}
        padsList={padsList}
        isOpenMenuPadsList={isOpenMenuPadsList}
        onClickToggleMenu={onClickToggleMenu}
        anchorEl={anchorEl}
        data = {data}
        onCloseHandler={onCloseHandler}
        onOpenHandler={onOpenHandler}
        handleOpenModal={handleOpenModal}
        isOpenModal={isOpenModal}
        handleCloseModal={handleCloseModal}
        isOpenShare={isOpenShare}
        handleOpenShare={handleOpenShare}
        handleCloseShare={handleCloseShare}
        />
}