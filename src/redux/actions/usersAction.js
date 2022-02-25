import { USERSACTIONTYPE } from "../actionTypes/usersActionTypes";
// Action For Appned New User to Redux Store
export function usersAction (payload) {
    const action = {
        type: USERSACTIONTYPE,
        payload
    }
    return action
}