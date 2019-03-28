// import {User} from '../../model/User';
import firebase from '../../../Firebase';
// export const Decrement = () => dispatch => {
//     dispatch(login());
// };

// export const Decrement = () => dispatch => {
//     dispatch(fetchPlaces());
// };

export function login (email, password) {
    return function action(dispatch) {
        return firebase.auth().signInWithEmailAndPassword('aa@aa.aa', '123456')
        .then(credential => {
          if (credential) {
            console.log(credential);

            dispatch({
                type: "GET_USER_SUCCESS",
                payload: credential.user.toJSON()
            });
            return {
                user: credential.user.toJSON()
            }
          }
        }).catch(function(error) {
          console.log(error);
        });
    }
  
}

// const fetchPlaces = () => {
//     let place1 = Place
//     let place2 = Place

//     place1.name = 'aloha'
//     place1.id = '398u98'
//     place1.phoneNumber = '022334934'
//     place1.type = 'hospital'

//     place2.name = 'kalu'
//     place2.id = '98098f98'
//     place2.phoneNumber = '0323342222'
//     place2.type = 'clinic'
    
//     return {
//         type: types.FetchPlaces,
//         payload: [place1, place2]
//     }
// }



