import { USERSACTIONTYPE } from "../actionTypes/usersActionTypes";

export function usersAction (payload) {
    const action = {
        type: USERSACTIONTYPE,
        payload
    }
    return action
}