import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const Cart = () => {
    const {cart} = useContext(CartContext)
  return (
    <>
        {
            cart.map((prod) => {
            <h2>{prod.name}</h2>
            })
        }
    </>
  )
}
