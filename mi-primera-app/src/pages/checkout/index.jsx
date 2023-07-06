import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { useForm } from 'react-hook-form'
import { collection, addDoc } from 'firebase/firestore'
import { db } from "../../firebase/config"
import { Link } from "react-router-dom"

export const Checkout = () => {
    const [orderId, setOrderId] = useState("")
    const {cart, totalPrice, cartClear} = useContext(CartContext)
    const {register, handleSubmit} = useForm()

    const buy = (data) => {
        const order = {
            customer: data,
            cart: cart,
            total: totalPrice()
        }
        console.log(order);

        const orderRef = collection(db, "pedidos")
        addDoc(orderRef, order)
            .then((doc) => {
                setOrderId(doc.id)
                cartClear()
            })
    }

    if (orderId){
        return (
            <div className="container-form">
                <h1 className="title-form">¡Muchas gracias por tu compra! :)</h1>
                <p className="p-order">Tu número de pedido es: {orderId}</p>
                <Link to="/products">
                    <button className="btn-order">Seguir comprando</button>
                </Link>
            </div>
        )
    }

  return (
    <div className="container-form">
        <h1 className="title-form">Tu Compra</h1>
        <form className="form" onSubmit={handleSubmit(buy)}>
            <input className="input" type="text" placeholder="Nombre" {...register("name")}/>
            <input className="input" type="email" placeholder="E-mail" {...register("email")}/>
            <input className="input" type="phone" placeholder="Telefono" {...register("phone")}/>
            <button type="submit" className="btn-form">FINALIZAR</button>
        </form>
    </div>
  )
}
