import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Box,  Modal, Typography} from '@mui/material';
import { Cart } from './Cart';
import CloseIcon from '@mui/icons-material/Close';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const Cartwidget = () => {
    const {cart, quantityCart, totalPrice, cartClear} = useContext(CartContext)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: 24,
        p: 4,
        bgcolor: 'background.paper',
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClear = () => {
        Swal.fire({
            customClass: {
                container: 'swal-clear',
                confirmButton: 'swal-font',
                cancelButton: 'swal-font',
                title: 'swal-font'
            },
            title: '¿Estas seguro de vaciar el carrito?',
            toast: true,
            icon: 'warning',
            iconColor: '#9c27b0',
            showCancelButton: true,
            confirmButtonColor: '#9c27b0',
            cancelButtonColor: '#d33',
            confirmButtonText: 'SI',
            cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    cartClear()
                    Swal.fire({
                        customClass: {
                            container: 'swal-clear',
                            confirmButton: 'swal-font',
                            cancelButton: 'swal-font',
                            title: 'swal-font'
                        },
                        title: 'Se vacio tu carrito',
                        toast: true,
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    return (
        <>
            <IconButton sx={{mx:'50px'}} aria-label="cart" onClick={handleOpen}>
                <Badge badgeContent={quantityCart()} color="secondary" className='badge'>
                    <ShoppingCartIcon sx={{color:"#fafafa"}} className='btn-cart'/>
                </Badge>
            </IconButton> 
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='modal-cartt' >
                    <Typography 
                        variant="h6" 
                        component="h2" 
                        sx= {{fontFamily: 'Poppins, sans-serif', paddingBottom: '1rem'}}
                        className='title-shop'
                    >
                        Carrito
                        <CloseIcon className='close' onClick={handleClose}/>
                    </Typography>
                    <Cart/>
                    <Typography 
                        variant="h6" 
                        component="h3" 
                        sx= {{fontSize: '1.1rem', fontFamily: 'Poppins, sans-serif', marginTop: '1rem', display: 'flex'}}
                    >
                        { cart.length > 0 ? 
                            <>
                                <p className='totalFinal'>Total final: ${totalPrice()}</p>
                                <button onClick={handleClear} className='btn-clear'>VACIAR CARRITO</button>
                                <Link to="/checkout" className='btn-checkout' onClick={handleClose}> FINALIZAR COMPRA </Link>
                            </> :
                            <p className='cart-vac'>Tu carrito esta vacio :(</p>
                        }
                        
                    </Typography>
                </Box>
        </Modal>
      </>
    )
}
export default Cartwidget;