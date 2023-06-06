import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';
import burger from './assets/burger.jpg';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <ItemListContainer/>
      </BrowserRouter>
    </>
  )
}
export default App;
