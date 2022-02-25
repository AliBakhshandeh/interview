import { USERSACTIONTYPE } from "../actionTypes/usersActionTypes";

// InitState Store
const init = []
// UserReducer for update Users at store
export default function usersReducer (state = init, action){
    switch (action.type) {
        case USERSACTIONTYPE:
        return [...state,action.payload]
        default:
            return state
    }
}