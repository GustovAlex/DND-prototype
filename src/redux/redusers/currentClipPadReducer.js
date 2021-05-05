import { SET_CURRENT_CLIP_PAD } from "../types"

const defaultState = {}

  export default function currentClipPadReducer(state = defaultState, action) {
    
    switch(action.type) {
        
        case SET_CURRENT_CLIP_PAD:
            return  state = action.payload
        default:
            return state
    }
}
