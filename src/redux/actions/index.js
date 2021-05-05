import { ADD_COLUMN } from '../types'
import { ADD_ITEM } from '../types'
import { CHANGE_COLUMN_NAME } from '../types/'
import { SET_CURRENT_CLIP_PAD } from '../types/'
import { DELETE_COLUMN } from '../types/'
import { CHANGE_ITEM } from '../types/index'
import { DELETE_ITEM } from '../types/index'
import { ADD_CLIP_PAD } from '../types/index'
import { CHENGE_CLIP_PAD_NAME } from '../types/index'
import { CHENGE_CLIP_PAD_EMAIL } from '../types/index'
import { ADD_USER } from '../types/index'

export const addColumn = (payload) => ({ type: ADD_COLUMN, payload })
export const addItem = (payload) => ({type: ADD_ITEM, payload })
export const changeColumnName = (payload) => ({type: CHANGE_COLUMN_NAME, payload})
export const deleteColumn = (payload) => ({type: DELETE_COLUMN, payload})
export const setCurrentClipPad = (payload) => ({type: SET_CURRENT_CLIP_PAD, payload})
export const changeItem = (payload) => ({type: CHANGE_ITEM, payload})
export const deleteItem = (payload) => ({type: DELETE_ITEM, payload})
export const addClipPad = (payload) => ({type: ADD_CLIP_PAD, payload})
export const chengeClipPadName = (payload) => ({type: CHENGE_CLIP_PAD_NAME, payload})
export const chengeClipPadEmail = (payload) => ({type: CHENGE_CLIP_PAD_EMAIL, payload})
export const addUser = (payload) => ({type: ADD_USER, payload})


