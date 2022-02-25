import { USERSACTIONTYPE } from "../actionTypes/usersActionTypes";

// InitState Store
const init = [
    {firstname: "Ali" , lastname:"bakhshandeh", age: "24" , abilites: ["js","html","css"]}
]
// UserReducer for update Users at store
export default function usersReducer (state = init, action){
    switch (action.type) {
        case USERSACTIONTYPE:
        return [...state,action.payload]
        default:
            return state
    }
}