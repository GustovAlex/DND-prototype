import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import Settings from './Settings'
import {useDispatch} from 'react-redux'
import {chengeClipPadName} from '../../redux/actions/index'
import {setCurrentClipPad, chengeClipPadEmail} from '../../redux/actions/index'

export default function SettingsContainer({isOpenSettings, onClickButtonSettingsHandler, handleOpenShare}) {
    const history = useHistory()
    const { data } = useSelector((state)=> state)
    const {currentClipPad} = useSelector((state) => state)
    const currentClipPadName = Object.keys(currentClipPad)[0]
    const clipPadNamesList = Object.keys(data)
    const currentEmail =  Object.keys(currentClipPad).length && currentClipPad[currentClipPadName].emailSettings
    const [name, setName] = useState("");
    const [users, setUsers] = useState("")
    const [inputValueName, setInputValueName] = useState("")
    const [inputValueEmail, setInputValueEmail] = useState("")
    const dispatch = useDispatch()

    useEffect(()=>{
        Object.keys(currentClipPad).length && setUsers(currentClipPad[currentClipPadName].users)
    }, [currentClipPad])

    useEffect(()=>selectedClipPad(name), [name])

    const selectedClipPad = (name) => {
        if (!!name && name !== currentClipPadName) {
             history.push(`/clip-board/${name}`)
           return data[name] 
        }
    }

    const handleChangeInSelect = (e) => {
      setName(e.target.value)
      setInputValueName(e.target.value)
    }

    const handleChangeEmail = (e) => {
      setInputValueEmail(e.target.value)
    }

    const newData = {};

    const chengeData = (newData, data, newValue, oldValue) => {
      if (newValue != '') {
        delete Object.assign(newData, data, {[newValue]: data[oldValue] })[oldValue]
      }
    }

    const changedClipPadEmail = {
      emailSettings: inputValueEmail,
      isPrivate: Object.keys(currentClipPad).length && currentClipPad[currentClipPadName].isPrivate,
      users: Object.keys(currentClipPad).length && currentClipPad[currentClipPadName].users,
      columns: Object.keys(currentClipPad).length && currentClipPad[currentClipPadName].columns,
  }
    
    const onClickConfirmChenges = () => {
      if (inputValueName !== "") {
        chengeData(newData, data, inputValueName, currentClipPadName)
        dispatch(chengeClipPadName({newData}))
        const valueName = inputValueName
        dispatch(chengeClipPadEmail({valueName, changedClipPadEmail}))
        dispatch(setCurrentClipPad({[inputValueName]: data[currentClipPadName]}))
        history.push(`/clip-board/${inputValueName}`)
      } 
      if (inputValueName === "" && inputValueEmail != "") {
        const valueName = currentClipPadName
        dispatch(chengeClipPadEmail({valueName , changedClipPadEmail}))
      }
      onClickButtonSettingsHandler()
    }

    const onChangeInputValueName = (e) => setInputValueName(e.target.value)
    const onChangeInputValueEmail = (e) => setInputValueEmail(e.target.value)
      
    return(<Settings 
            isOpenSettings={isOpenSettings}
            onClickButtonSettingsHandler={onClickButtonSettingsHandler}
            handleChange={handleChangeInSelect}
            currentClipPadName={currentClipPadName}
            clipPadNamesList={clipPadNamesList}
            users={users}
            name={name}
            currentClipPad={currentClipPad}
            inputValueName={inputValueName}
            onChangeInputValueName={onChangeInputValueName}
            inputValueEmail={inputValueEmail}
            onChangeInputValueEmail={onChangeInputValueEmail}
            currentClipPad={currentClipPad}
            currentEmail={currentEmail}
            onClickConfirmChenges={onClickConfirmChenges}
            handleChangeEmail={handleChangeEmail}
            handleOpenShare={handleOpenShare}
            />)
}