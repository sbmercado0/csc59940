import Rebase from 're-base';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCjVOEHQFVtMWQMn1AV3zssbi3zG2lQF0k",
    authDomain: "lasertag-leaderboards.firebaseapp.com",
    databaseURL: "https://lasertag-leaderboards.firebaseio.com",
    projectId: "lasertag-leaderboards",
    storageBucket: "",
    messagingSenderId: "748760826849"
  };

const firebaseApp = firebase.initializeApp(config);
const base = Rebase.createClass(firebaseApp.database());

export default base;