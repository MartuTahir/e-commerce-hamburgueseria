import { useContext, useState } from "react"
import { ItemCount } from "./ItemCount"
import { CartContext } from "../context/CartContext"
import { Alert, Box, Snackbar } from "@mui/material"

const ItemDetail = ({item}) => {

  const {addCart, open, handleAdd, handleRest} = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)
  

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
                  handleAdd={() => handleAdd(item, quantity, setQuantity)}
                  handleRest={() => handleRest(quantity, setQuantity)}
                />
                <button className="add-cart" onClick={() => { addCart(item, quantity) }}>
                  AGREGAR AL CARRITO
                </button>
                <Box>
                  <Snackbar
                    open={open}
                  >
                    <Alert severity="success"
                    sx={{fontFamily:'Poppins, sans-serif', fontWeight:'600', padding:'1rem'}}
                    >¡Producto agregado al carrito!</Alert>
                  </Snackbar>
                </Box>
            </div>
        </div>
    </div>
  )
}
export default ItemDetail
