import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'


firebase.initializeApp(
  {
    apiKey: "AIzaSyCb-0cWiZP4DSDuwdXkgy2rzG14AmBd5YA",
    authDomain: "chat-react-934a7.firebaseapp.com",
    projectId: "chat-react-934a7",
    storageBucket: "chat-react-934a7.appspot.com",
    messagingSenderId: "113291495443",
    appId: "1:113291495443:web:efe55ea52e7330a51d97e6",
    measurementId: "G-XNMTPNL0GM"
  }
);
export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()



ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
