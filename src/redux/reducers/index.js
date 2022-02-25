import usersReducer from "./userReducer"
import {combineReducers} from "redux"
// conbine Reducer for Append All Redux Reducers
const rootReducer = combineReducers({
    users: usersReducer,
    })
export default rootReducer