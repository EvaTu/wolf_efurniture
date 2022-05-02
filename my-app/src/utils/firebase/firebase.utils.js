import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc} from 'firebase/firestore'



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

export const db = getFirestore(firebaseApp)

export const createUserDocumentFromAuth = async (userAuth) => {
const userDocRef = doc(db, "users", userAuth.uid)
// console.log(userDocRef)
const userSnapshot = await getDoc(userDocRef)
// console.log(userSnapshot)
// console.log(userSnapshot.exists())


if(!userSnapshot.exists()){
  const {displayName, email} = userAuth
  const createAt = new Date()
  try{
    await setDoc(userDocRef, {
      displayName,
      email,
      createAt
    })
  }
  catch(error){
    console.log("error creating the user", error.message)
  }

}

return userDocRef

}