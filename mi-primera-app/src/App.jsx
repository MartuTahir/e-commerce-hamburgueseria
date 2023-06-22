import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import './App.css';
import { Home, Sucursales } from './pages';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <>
      <CartProvider>
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
      </CartProvider>
    </>
  )
}
export default App;
