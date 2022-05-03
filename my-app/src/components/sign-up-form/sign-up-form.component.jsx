import {useState} from 'react'
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import "./sign-up-form.styles.scss"
import Button from "../button/button.component"

const SignUpForm = () => {
    const [ formData, setFormData] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        setFormData({...formData, [key]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
        if(formData.password !== formData.confirmPassword){
            alert("Password do not match")
            return
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(formData.email, formData.password)
            // const response = await createAuthUserWithEmailAndPassword(formData.email, formData.password)
            // console.log(response)
            await createUserDocumentFromAuth( user, { displayName: formData.displayName})
            setFormData({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        }catch(error){
            if(error.code === "auth/email-already-in-use"){
                alert("Cannot create user, email already in use")
            }else{
                console.log("user creation encounter an error", error)
            }
            
        }
        
    }

    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                label="Display Name"
                required type="text" 
                name="displayName"
                value={formData.displayName} 
                onChange={handleChange}/>

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

                <FormInput 
                label="Confirm Password"
                required 
                type="password" 
                name="confirmPassword"
                value={formData.confirmPassword} 
                onChange={handleChange}/>

                <Button  type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm