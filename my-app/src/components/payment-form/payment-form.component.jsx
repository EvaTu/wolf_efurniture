import "./payment-form.styles.scss";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import {PaymentElement} from '@stripe/react-stripe-js';
import Button from "../button/button.component"

const PaymentForm = () => {
    const stripe = useStripe()
    const elements = useElements()

    const handlePayment = async (e) => {
        e.preventDefault();

        if(!stripe || !elements){
            return
        }

        
    }

    return(
        <div className="payment-form-container">
            <h2 style={{ margin: "50px"}}>Credit Card Payment</h2>
            {/* <PaymentElement /> */}
            <CardElement className="form-container"/>
            <Button buttonType="inverted">Pay Now</Button>
        </div>
    )
}

export default PaymentForm