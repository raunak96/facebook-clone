import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBu8q9DHg5WPFW_ixROGTXQQQssGdICM4E",
	authDomain: "facebook-clone-6ee94.firebaseapp.com",
	projectId: "facebook-clone-6ee94",
	storageBucket: "facebook-clone-6ee94.appspot.com",
	messagingSenderId: "559216936184",
	appId: "1:559216936184:web:698dadde5029720847670d",
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

export const db = app.firestore();
export const storage = firebase.storage();
