import firebase from 'firebase'

const config = {};

export const firebaseApp = firebase.initializeApp(config)
export const firebaseAuth = firebaseApp.auth()
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
 
