import action, { Login } from '../actions/ActionsType';
import User from '../../model/User'

const initialState = {
    user: {},

};

const UserReducer = (state = initialState, action) => {
    switch (action.type){
        case Login:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
};
