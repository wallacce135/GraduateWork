import { actionTypes } from "../../App(Redux)/actionTypes";


const init = {
    currentUser: {user_id: null},
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
        case actionTypes.GET_CURRENT_USER:
            return {...state, currentUser: { ...action.user }}
        default:
            return state
    }
}

export const getUsersActionCreator = record => ({type: actionTypes.GET_USERS, record});
export const setNewUserActionCreator = payloadUser => ({type: actionTypes.NEW_USER, payloadUser});
export const setAuthorisedActionCreator = value => ({type: actionTypes.IS_AUTHORISED, value});
export const getCurrentUserActionCreator = user => ({type: actionTypes.GET_CURRENT_USER, user});