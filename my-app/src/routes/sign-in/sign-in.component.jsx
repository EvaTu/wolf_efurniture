import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils"
import { useEffect } from "react"
import { getRedirectResult } from "firebase/auth"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"


const SignIn = () => {



    const logGoogleUser = async() => {
        const response = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(response.user)
        console.log(userDocRef)
    }

    // const logGoogleRedirect = async() => {
    //     const response = await signInWithGoogleRedirect()
    //     // const userDocRef = await createUserDocumentFromAuth(response.user)
    //     // console.log(userDocRef)
    //     console.log(response.user)
    // }

    // useEffect(()=> (
    //     async () => {
    //     const response = await getRedirectResult(auth)
    //     if(response){
    //         const userDocRef2 = await createUserDocumentFromAuth(response.user)
    //         console.log(userDocRef2)
    //     }
        
    // }), [])

   

    return(
        <div>
            <h1>Sign In  Page</h1>
            <button onClick={logGoogleUser}>Sign In With Google</button>
            {/* <button onClick={logGoogleRedirect}>Sign In With Google Redirect</button> */}
            {/* <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button> */}
            <SignUpForm />
        </div>
    )
}

export default SignIn

