import { NavLink } from 'react-router-dom';

export const NavCategory = () => {
  return (
    <div className='category-nav'>             
        <NavLink to="/products"> Todas </NavLink>
        <NavLink to="/products/Carne"> Carne </NavLink>
        <NavLink to="/products/Pollo"> Pollo </NavLink>
        <NavLink to="/products/Vegetal"> Vegetal </NavLink>                
    </div>
  )
}
