import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBk8nsalEY25tBsU88lKqvSwi9G3Pu-fts",
    authDomain: "wolf-efurniture-db.firebaseapp.com",
    projectId: "wolf-efurniture-db",
    storageBucket: "wolf-efurniture-db.appspot.com",
    messagingSenderId: "922591327297",
    appId: "1:922591327297:web:cb0570cf2cd360790002c0"
  };
  
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)