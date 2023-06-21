import { useContext, useState } from "react"
import { ItemCount } from "./ItemCount"
import { CartContext } from "../context/CartContext"

const ItemDetail = ({item}) => {

  const {cart, addCart} = useContext(CartContext)
  console.log(cart);

  const [quantity, setQuantity] = useState(1)
    
  const handleRest = () => {
      quantity > 1 && setQuantity(quantity - 1)
  }
  const handleAdd = () => {
      quantity < item.stock && setQuantity(quantity + 1)
  }

  return (
    <div>
        <div className="detail">
            <img src={item.image} className="img-detail"/>
            <div className="container-detail">
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <p className="p-detail">${item.price}</p>
                <ItemCount 
                  quantity={quantity}
                  handleAdd={handleAdd}
                  handleRest={handleRest}
                />
                <button className="add-cart" onClick={() => { addCart(item, quantity) }}>
                  AGREGAR AL CARRITO
                </button>
            </div>
        </div>
    </div>
  )
}
export default ItemDetail
