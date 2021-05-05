import { padsList} from "../../data/padsList"
import { ADD_COLUMN, 
    ADD_ITEM, 
    CHANGE_COLUMN_NAME, 
    DELETE_COLUMN, 
    CHANGE_ITEM, 
    DELETE_ITEM, 
    ADD_CLIP_PAD, 
    CHENGE_CLIP_PAD_NAME,
    CHENGE_CLIP_PAD_EMAIL,
    ADD_USER  
} from "../types"
    
export default function dataReducer(state = padsList, action) {
    
    switch(action.type) {
        case ADD_COLUMN:
            const targetClipPad = action.payload.clipPadName
            return {
                ...state,
                [targetClipPad] : action.payload.changedClipPad,
            }
        case ADD_ITEM:
            const targetClipPadItem = action.payload.clipPadName          
            return {
                ...state,
                [targetClipPadItem] : action.payload.changedClipPad,
            }
        case CHANGE_COLUMN_NAME:
            const targetClipPadName = action.payload.inputValueName   
            return {
                ...state,
                [targetClipPadName] : action.payload.changedClipPadColumnName,
            }
        case DELETE_COLUMN:
            return {
               ...state,
            }
        case CHANGE_ITEM:
            return {
                ...state, 
            }
        case DELETE_ITEM:
            return {
                ...state, 
            }
        case ADD_CLIP_PAD:
             return {
                ...state,
                [action.payload.clipPadTitle]: action.payload.newClipPad
            }
        case CHENGE_CLIP_PAD_NAME:
            return action.payload.newData
        case CHENGE_CLIP_PAD_EMAIL:
            const targetClipPadForEmail = action.payload.valueName
            return {
                ...state,
                [targetClipPadForEmail] : action.payload.changedClipPadEmail,
            }
        case ADD_USER:
            return {
                ...state
            }
        default:
            return state
    }
}

