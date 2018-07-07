import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBUyaHBkouiPCtVsBQRWWgkGpQJ6AJ2Xy4",
  authDomain: "talkme-0101.firebaseapp.com",
  databaseURL: "https://talkme-0101.firebaseio.com",
  projectId: "talkme-0101",
  storageBucket: "",
  messagingSenderId: "129880853120"
};

firebase.initializeApp(config);
const Auth = firebase.auth();
const Database = firebase.database();
const Firebase = firebase;
module.exports = {Auth, Database, Firebase}