import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Checkout, Home, Sucursales, Login } from './pages';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import {SnackbarProvider} from 'notistack'
import './App.css';
import { useState } from 'react';
import { app } from './firebase/config'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(app)

function App() {

  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    } else {
      setUser(null)
    }
  })

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <SnackbarProvider maxSnack={10} autoHideDuration={2000}>
            {user ? 
              <>
              {/* <Login/> */}
                <Navbar/>
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/sucursales' element={<Sucursales/>}/>
                  <Route path='/products' element={<ItemListContainer/>}/>
                  <Route path='/products/:category' element={<ItemListContainer/>}/>
                  <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                  <Route path='/checkout' element={<Checkout/>}/>
                </Routes>
                <Footer/>
              </>
              : <Login/>
              }
          </SnackbarProvider>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}
export default App;
