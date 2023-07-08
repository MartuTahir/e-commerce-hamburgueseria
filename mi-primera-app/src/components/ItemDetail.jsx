import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Alert, Box, Snackbar } from "@mui/material"
import { ItemCount } from "./ItemCount"
import Swal from "sweetalert2"

const ItemDetail = ({item}) => {

  const {addCart, open, quantityCart} = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  const handleRest = () => {
    quantity > 1 && setQuantity(quantity - 1)
    quantityCart()
  }
  const handleAdd = (item) => {
      quantity < item.stock && setQuantity(quantity + 1)
      quantityCart()
  }
  

  return (
    <div>
        <div className="detail">
            <img src={item.image} className="img-detail"/>
            <div className="container-detail">
                <h1 className="title-detail">{item.name}</h1>
                <p className="description">{item.description}</p>
                <p className="p-detail">${item.price}</p>
                <p className="stock">Stock disponible: {item.stock}</p>
                <ItemCount 
                  quantity={quantity}
                  handleAdd={() => handleAdd(item)}
                  handleRest={handleRest}
                />
                <button className="add-cart" onClick={() => { addCart(item, quantity) }}>
                  AGREGAR AL CARRITO
                </button>
                <Box>
                  <Snackbar
                    open={open}
                  >
                    <Alert severity="success"
                    sx={{fontFamily:'Poppins, sans-serif', fontWeight:'600', display:'flex'}}
                    className="alert-cart"
                    >
                      <p className="p-alert">¡Producto agregado al carrito!</p>
                    </Alert>
                  </Snackbar>
                </Box>
            </div>
        </div>
    </div>
  )
}
export default ItemDetail
