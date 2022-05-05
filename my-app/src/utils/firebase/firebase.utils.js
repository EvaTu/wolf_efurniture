import { initializeApp } from 'firebase/app'
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyBk8nsalEY25tBsU88lKqvSwi9G3Pu-fts",
    authDomain: "wolf-efurniture-db.firebaseapp.com",
    projectId: "wolf-efurniture-db",
    storageBucket: "wolf-efurniture-db.appspot.com",
    messagingSenderId: "922591327297",
    appId: "1:922591327297:web:cb0570cf2cd360790002c0"
  };
  
  
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore(firebaseApp)

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)
  
  objectsToAdd.forEach( object => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log("done")
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories")
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {title, items} = docSnapshot.data()
    acc[title.toLowerCase()] = items
    return acc
  }, {})
  return categoryMap
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  if(!userAuth) return
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
        createAt,
        ...additionalInformation
      })
    }
    catch(error){
      console.log("error creating the user", error.message)
    }
  }

  return userDocRef

}

export const createAuthUserWithEmailAndPassword = async ( email, password) => {
  if(!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}

export const SignOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)