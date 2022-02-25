import usersReducer from "./userReducer"
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    users: usersReducer,
    })
export default rootReducer