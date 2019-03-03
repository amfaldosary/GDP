import {User} from '../../model/User';
import {Place} from '../../model/Place';
import * as types from './ActionsType';

export const Decrement = () => dispatch => {
    dispatch(login());
};

export const Decrement = () => dispatch => {
    dispatch(fetchPlaces());
};

const login = (email, password) => {
    let user = User

    user.name = 'moha'
    user.email = 'aa@aa.aa'
    user.password = 'aaaa'
    user.id = '129837'
    user.token = 'diwjd88'
    user.type = 'driver'

    return {
        type: types.Login,
        payload: user
    }
}

const fetchPlaces = () => {
    let place1 = Place
    let place2 = Place

    place1.name = 'aloha'
    place1.id = '398u98'
    place1.phoneNumber = '022334934'
    place1.type = 'hospital'

    place2.name = 'kalu'
    place2.id = '98098f98'
    place2.phoneNumber = '0323342222'
    place2.type = 'clinic'
    
    return {
        type: types.FetchPlaces,
        payload: [place1, place2]
    }
}



