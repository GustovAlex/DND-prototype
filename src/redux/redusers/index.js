import { createStore, combineReducers } from 'redux'
import {composeWithDevTools}  from "redux-devtools-extension"
import dataReducer from "./dataReducer"
import currentClipPadReducer from "./currentClipPadReducer"

const rootReduser = combineReducers({
    data: dataReducer,
    currentClipPad: currentClipPadReducer,
})


export const store = createStore(
  rootReduser,
  composeWithDevTools()
)
