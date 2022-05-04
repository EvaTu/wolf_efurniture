import "./checkout.styles.scss";
import {useContext} from 'react'
import {CartContext} from "../../contexts/cart.context"
import CheckOutItem from "../../components/checkout-item/checkout-item.component"


const CheckOut = () => {
    const {cartItems, checkoutTotal} = useContext(CartContext)


    return(
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
                {cartItems.map((item) =>
                <CheckOutItem item={item} />
                )}
           <span className="total">Total: ${checkoutTotal}</span>
        </div>
    )
}

export default CheckOut