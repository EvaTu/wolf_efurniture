import {createContext, useState, useEffect} from "react"



export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {}, 
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemfromCart: () => {},
    clearItemfromCart: () => {},
    checkoutTotal: 0.0
})

const addCartItem = (cartItems, productToAdd) => {
    //step1: checking if the new productToAdd is existing in cartItems
    const existingCartItem = cartItems.find( cartItem => cartItem.id === productToAdd.id)
    //step2: if it existing, just add 1 more to thw quantity
    if(existingCartItem){
        return cartItems.map( cartItem => 
            cartItem.id === productToAdd.id ?
            {...cartItem, quantity: cartItem.quantity+1} : cartItem
            )
    }
    //step3: if not just create new productToAdd to cartItems Array
    return [...cartItems, {...productToAdd, quantity: 1} ]
    }

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToRemove.id)

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map( cartItem => 
        cartItem.id === cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity-1} : cartItem
        )
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)

}


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(CartContext)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [checkoutTotal, setCheckoutTotal] = useState(0.0)

    useEffect(()=> {
        const total = cartItems.reduce((acc, item) => acc+item.quantity,0)
        setCartCount(total)

    }, [cartItems])

    useEffect(()=> {
        const total = cartItems.reduce((acc, item) => acc+(item.quantity*item.price),0.0)
        const parseTotal = Number.parseFloat(total).toFixed(2)
        setCheckoutTotal(parseTotal)

    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    const removeItemfromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems,cartItemToRemove))
    }

    const clearItemfromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems,cartItemToClear))}

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemfromCart, clearItemfromCart, checkoutTotal}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}