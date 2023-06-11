import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import './App.css';
import { Sucursales } from './pages';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/sucursales' element={<Sucursales/>}/>
          <Route path='/products' element={<ItemListContainer/>}/>
          <Route path='/products/:category' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  )
}
export default App;
