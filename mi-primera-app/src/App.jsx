import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Checkout, Home, Login } from './pages';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import {SnackbarProvider} from 'notistack'
import './App.css';
import { AuthProvider } from './context/AuthContext';
import { auth } from './firebase/config';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState("")
    useEffect(() => {
        const suscribed = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser){
                console.log("no hay usuario");
                setUser("")
            } else {
                setUser(currentUser)
            }
        })
        return () => suscribed()
    }, [])
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <SnackbarProvider maxSnack={10} autoHideDuration={2000}>
              {user ? 
                <>
                    <Navbar user={user}/>
                    <Routes>
                      <Route path='/' element={<Home/>}/>
                      <Route path='/products' element={<ItemListContainer/>}/>
                      <Route path='/products/:category' element={<ItemListContainer/>}/>
                      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                      <Route path='/checkout' element={<Checkout/>}/>
                    </Routes>
                    <Footer/>
                </> 
                : 
                  <Login/>
              }
            </SnackbarProvider>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </>
  )
}
export default App;
