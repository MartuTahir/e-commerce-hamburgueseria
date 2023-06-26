import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const initialCart = JSON.parse(localStorage.getItem("cart")) || []

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(initialCart)
    const [open, setOpen] = useState(false)
    
    
    const handleRest = (quantity, setQuantity) => {
        quantity > 1 && setQuantity(quantity - 1)
    }
    const handleAdd = (item, quantity, setQuantity) => {
        quantity < item.stock && setQuantity(quantity + 1)
    }

    const addCart = (item, quantity) => {
        const itemAdd = {...item, quantity}
        const newCart = [...cart]
        const exists = newCart.find((prod) => prod.id === itemAdd.id)
        exists ? exists.quantity += quantity : newCart.push(itemAdd)
        setCart(newCart)
        setOpen(true)
        setTimeout(() => {
            setOpen(false)
        },2000)
    }

    const quantityCart = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
    }

    const cartClear = () => {
        setCart([])
    } 

    const prodDelete = (prod) => {
        return setCart(cart.filter((item) => item.id !== prod.id))
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider 
            value={ {cart, addCart, quantityCart, totalPrice, cartClear, prodDelete, open, handleAdd, handleRest} }>
            {children}
        </CartContext.Provider>
    )
}