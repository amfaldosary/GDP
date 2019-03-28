
// import { combineReducers } from 'redux';

// import action, { Login } from '../actions/ActionsType';
// import User from '../../model/User'

// const initialState = {
//     user: {},

// };

// const UserReducer = (state = initialState, action) => {
//     switch (action.type){
//         case Login:
//             return {
//                 ...state,
//                 user: action.payload
//             }
//         default:
//             return state;
//     }
// };

const GET_USER = "GET_USER";
const GET_USER_SUCCESS = "GET_USER_SUCCESS";
const REMOVE_USER = "REMOVE_USER";

const initialState = {user: {}};

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case GET_USER: 
            return {...state, loading: true}
        case GET_USER_SUCCESS: 
            console.log(action);
            console.log("@@@@@____@@@@@@");
            return {...state, loading: false, user: action.payload}
        case REMOVE_USER: 
            return {...state, loading: true, user: {}}
        default:
        return state;
    }
}