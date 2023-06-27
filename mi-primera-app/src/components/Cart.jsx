import { useContext, } from "react"
import { CartContext } from "../context/CartContext"
import DeleteIcon from '@mui/icons-material/Delete';

export const Cart = () => {
    const {cart, prodDelete, quantCart} = useContext(CartContext)
  
  return (
    <>
        {
          cart.map((prod) => {
          return (
            <div key={prod.id} className="cont-prod">
              <img src={prod.image} className="img-cart"/>
              <div className="contain-cart">
                <p>{prod.name}</p>
                <div className="flex">
                  <p className="prod-p">${prod.price}</p>
                  <p className="p-quantity">
                    Cantidad: {quantCart} 
                  </p>
                </div>
              </div>
              <p className="p-total">Total: ${prod.price * quantCart}</p>
              <button className="btn-trash" onClick={() => prodDelete(prod)}>
                  <DeleteIcon className="trash" ></DeleteIcon>
              </button>
            </div>
            )
          })
        }
    </>
  )
}
