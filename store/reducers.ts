import { combineReducers } from "redux"
import landingData from "./landingData/reducer"
import thank from "./thank/reducer"

export default combineReducers({ landingData, thank })
