import { Carousel } from '../../components/Carousel'
import veggies from '../../assets/veggies.jpg'
import papas from '../../assets/papas.png'
import sucursal from '../../assets/SUCU.png'

export const Home = () => {
  return (
    <div className='background'>
        <Carousel/>
        <div className='div-color'>
          <h1 className='home-title'>Novedades</h1>
        </div>
        <div className='div-nov'>
          <div className='novedad'>
            <img src={veggies} className='img-novedad' />
            <p className='p-novedad'>Descubri nuestras nuevas hamburguesas vegetales :)
              Ya disponibles
            </p>
          </div>
          <div className='novedad'>
            <img src={papas} className='img-novedad' />
            <p className='p-novedad'>Disfruta al máximo nuestras papas fritas :)</p>
          </div>
          <div className='novedad'>
            <img src={sucursal} className='img-novedad' />
            <p className='p-novedad'>Para vos, más lugares con las mejores hamburguesas :)</p>
          </div>
        </div>
    </div>
  )
}
