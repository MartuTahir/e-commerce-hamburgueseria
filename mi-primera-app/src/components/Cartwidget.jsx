import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Box, Modal, Typography } from '@mui/material';
import { Cart } from './Cart';

const Cartwidget = () => {
    const {cart, quantityCart} = useContext(CartContext)

    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        boxShadow: 24,
        p: 4,
        bgcolor: 'background.paper',
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <IconButton sx={{mx:'50px'}} aria-label="cart" onClick={handleOpen}>
                <Badge badgeContent={quantityCart()} color="secondary">
                    <ShoppingCartIcon sx={{color:"#fafafa"}} />
                </Badge>
            </IconButton> 
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Carrito
                    </Typography>
                    <div>
                        {
                            cart.map((prod) => {
                            <h2>{prod.name}</h2>
                            })
                        }
                    </div>
                </Box>
        </Modal>
      </>
    )
}
export default Cartwidget;