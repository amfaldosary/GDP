import * as firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyC4sBUpd5O2opONcj0gAHfb_jNRUQ0mBBs",
    authDomain: "myproject-61c1f.firebaseapp.com",
    databaseURL: "https://myproject-61c1f.firebaseio.com",
    projectId: "myproject-61c1f",
    storageBucket: "myproject-61c1f.appspot.com",
    messagingSenderId: "137911620705"
  };
firebase.initializeApp(config);
export default firebase;