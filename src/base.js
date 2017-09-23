import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCfbY4E9HkZBhCQs2J_tfqIpDGBf9g5lW4",
	authDomain: "chat-reactjs-ddd47.firebaseapp.com",
	databaseURL: "https://chat-reactjs-ddd47.firebaseio.com",
	projectId: "chat-reactjs-ddd47",
	messagingSenderId: "16924190884"
})
const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
  'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base