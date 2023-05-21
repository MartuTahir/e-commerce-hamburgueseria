import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import burger from './assets/burger.jpg';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer 
        container= "container" 
        styleTitle= "title"
        title= "ALTA PINTA HAMBURGUESERÍA"
        imgClass= "burger"
        img= {burger}
      />
    </>
  )
}
export default App;
