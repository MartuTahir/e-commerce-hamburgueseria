import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import DeleteIcon from '@mui/icons-material/Delete';
import { ItemCount } from "./ItemCount";

export const Cart = () => {
    const {cart, prodDelete, handleAdd, handleRest} = useContext(CartContext)
    const [quantity, setQuantity] = useState(1)

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
                    Cantidad: {quantity} 
                    <span>
                      <ItemCount
                        quantity={quantity}
                        handleAdd={() => handleAdd(prod, quantity, setQuantity)}
                        handleRest={() => handleRest(quantity,setQuantity)}
                      />
                    </span>
                  </p>
                </div>
              </div>
              <p className="p-total">Total: ${prod.price * prod.quantity}</p>
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
