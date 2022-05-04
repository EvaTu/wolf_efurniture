import "./product-card.styles.scss"
import Button from "../button/button.component"
import {useContext} from 'react'
import {CartContext} from "../../contexts/cart.context"

const ProductCard = ({product}) => {
    const { cartItems, addItemToCart} = useContext(CartContext)

    return(
        <div className="product-card-container">
            <img src={product.imageUrl} alt={`${product.name}`}/>
            
            <div className="footer">
                <span className="name">{product.name}</span>
                <span className="price">{product.price}</span>
            </div>
            <Button buttonType="inverted" onClick={()=> addItemToCart(product)}>Add To Cart</Button>
        </div>
    )
}

export default ProductCard