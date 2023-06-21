import { useState } from 'react';
import './Navbar.css'
import logo from '../../assets/logoburger.png'
import Cartwidget from '../Cartwidget';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="navbar">
                <div>
                    <Link to='/'>
                        <img src={logo} className="logo"/>
                    </Link>
                </div>
                <div className={`items ${isOpen && "open"}`}>
                    <NavLink to="/"> Inicio </NavLink>
                    <NavLink to="/products"> Menu </NavLink>
                    <NavLink to="/sucursales"> Sucursales </NavLink>
                </div>
                <Cartwidget/>
                <div className={`nav-toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen) }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
    )
}
export default Navbar;