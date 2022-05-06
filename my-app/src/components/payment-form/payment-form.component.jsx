import "./payment-form.styles.scss";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import {PaymentElement} from '@stripe/react-stripe-js';
import Button from "../button/button.component"
import {useState, useContext} from 'react'
import {UserContext} from "../../contexts/user.context"
import {CartContext} from "../../contexts/cart.context"

const PaymentForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const { checkoutTotal} = useContext(CartContext)
    const { currentUser} = useContext(UserContext)
    const parseTotal = Number.parseFloat(checkoutTotal).toFixed(2)
    const [isProcessingPayment, setIsProcessingPayment] = useState(false)
    // console.log(currentUser)

    const handlePayment = async (e) => {
        e.preventDefault();

        if(!stripe || !elements){
            return
        }

        setIsProcessingPayment(true)

        const response = await fetch("/.netlify/functions/create-payment-intent",{
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({amount: parseTotal * 100})
        }).then(resp=> resp.json())

        const clientSecret = response.paymentIntent.client_secret

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : "Guest",
                }
            }
        })

        setIsProcessingPayment(false)

        if(paymentResult.error){
            alert(paymentResult.error)
        }else{
            if(paymentResult.paymentIntent.status === "succeeded"){
                alert("Payment Successful")
            }
        }
    }

    return(
        <div className="payment-form-container">
            <form onSubmit={handlePayment}>
            <h2 style={{ margin: "50px"}}>Credit Card Payment</h2>
            {/* <PaymentElement /> */}
            <CardElement />
            <Button disabled={isProcessingPayment}
            buttonType="inverted" 
            style={{ margin: "50px"}}>Pay Now</Button>
            </form>
        </div>
    )
}

export default PaymentForm