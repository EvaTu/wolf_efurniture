import {useState, useContext} from 'react'
import FormInput from "../form-input/form-input.component"
import "./sign-in-form.styles.scss"
import Button from "../button/button.component"
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"
// import { UserContext } from "../../contexts/user.context"





const SignInForm = () => {
    const [ formData, setFormData] = useState({
        password: "",
        email: "",
    })

    // const {setCurrentUser} = useContext(UserContext)

    const signInWithGoogle = async() => {
        const response = await signInWithGooglePopup()
        // await createUserDocumentFromAuth(response.user)
        // const userDocRef = await createUserDocumentFromAuth(response.user)
        // console.log(userDocRef)
    }

    const handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        setFormData({...formData, [key]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const {user} = await signInAuthUserWithEmailAndPassword(formData.email, formData.password)
            // setCurrentUser(user)
            setFormData({
                email: "",
                password: "",
            })
        }catch(error){
            switch(error.code){
                case "auth/wrong-password":
                    alert("incorrect password for email")
                    break
                case "auth/user-not-found":
                    alert("no user associated with this email")
                    break
                default: 
                    console.log(error)
                }
            }
               
        }
        

    return(
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                label="Email"
                required 
                type="email" 
                name="email"
                value={formData.email} 
                onChange={handleChange}/>

                <FormInput
                label="Password"
                required 
                type="password" 
                name="password"
                value={formData.password} 
                onChange={handleChange}/>   

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm