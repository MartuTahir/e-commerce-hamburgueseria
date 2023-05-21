import { useState } from 'react';
import './Navbar.css'
import logo from '../../assets/logoburger.png'
import Cartwidget from '../Cartwidget/Cartwidget';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="navbar">
            <div>
                <img src={logo} className="logo"/>
            </div>
            <div className={`items ${isOpen && "open"}`}>
                <a href=""> Inicio </a>
                <a href=""> Menu </a>
                <a href=""> Contacto </a>
            </div>
            <Cartwidget/>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen) }>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Navbar;