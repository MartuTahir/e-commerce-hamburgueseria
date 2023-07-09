import { useState } from 'react';
import './Navbar.css'
import logo from '../../assets/logoburger.png'
import Cartwidget from '../Cartwidget';
import { Link, NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Modal, Typography } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import PersonIcon from '@mui/icons-material/Person';

const style = {
    position: 'absolute',
    top: '30%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
  };

const Navbar = ({user}) => {
    const auth = useAuth()
    const {email} = user
    console.log(email)
    const [isOpen, setIsOpen] = useState(false)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleLogout = () => {
        auth.logout()
    }
    return (
            <div className="navbar">
                <div>
                    <Link to='/'>
                        <img src={logo} className="logo"/>
                    </Link>
                </div>
                <div className={`items ${isOpen && "open"}`}>
                    <NavLink to="/" onClick={ () => setIsOpen(!isOpen)}> Inicio </NavLink>
                    <NavLink to="/products" onClick={ () => setIsOpen(!isOpen)}> Menu </NavLink>
                </div>
                <div>
                    <Cartwidget/>
                    <AccountCircleIcon onClick={handleOpen} sx={{ fontSize:'1.8rem' }} className='account'></AccountCircleIcon>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style} className='modal-user'>
                        <Typography id="modal-modal-title" variant="h6" component="h2" className='flex-user'>
                            <PersonIcon color='secondary' sx={{marginRight:'1rem', fontSize:'2.2rem', marginTop: '0.8rem'}} className='personIcon'/>
                            <p className='user'>¡Hola {email}!</p>
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <button onClick={handleLogout} className='close-sesion'>Cerrar Sesión</button>
                        </Typography>
                        </Box>
                    </Modal>
                </div>
                <div className={`nav-toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen) }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
    )
}
export default Navbar;