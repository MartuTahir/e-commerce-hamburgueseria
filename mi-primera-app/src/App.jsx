import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import './App.css';
import { Home, Sucursales } from './pages';
import { Footer } from './components/Footer';
import { CartContext } from './context/CartContext';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([])

  const addCart = (item, quantity) => {
    const itemAdd = {...item, quantity}
    const newCart = [...cart]
    const exists = newCart.find((prod) => prod.id === itemAdd.id)
    exists ? exists.quantity += quantity : newCart.push(itemAdd)
    setCart(newCart)
  }

  const quantityCart = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0)
  }

  return (
    <>
      <CartContext.Provider value={ {cart, addCart, quantityCart} }>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sucursales' element={<Sucursales/>}/>
            <Route path='/products' element={<ItemListContainer/>}/>
            <Route path='/products/:category' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          </Routes>

          <Footer/>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  )
}
export default App;
