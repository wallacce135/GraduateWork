import { actionTypes } from "../../App(Redux)/actionTypes";

const init = {
    users: [],
    authorized: false
}

export function UsersReducer(state = init, action){
    switch (action.type) {
        case actionTypes.GET_USERS:
            return { ...state, users: action.record}
        case actionTypes.NEW_USER:
            console.log(action.payloadUser);
            return { ...state, ...state.users.push(action.payloadUser)}
        case actionTypes.IS_AUTHORISED:
            return {...state, authorized: action.value}
        default:
            return state
    }
}

export const getUsersActionCreator = record => ({type: actionTypes.GET_USERS, record});
export const setNewUserActionCreator = payloadUser => ({type: actionTypes.NEW_USER, payloadUser});
export const setAuthorisedActionCreator = value =>({type: actionTypes.IS_AUTHORISED, value});