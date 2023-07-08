import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import primerImg from '../assets/imagen1.png'
import segundaImg from '../assets/imagen3.png'
import terceraImg from '../assets/imagen2.png'

export const Carousel = () => {
  return (
    <Splide>
        <SplideSlide>
            <img src={primerImg} alt="Image 1" className='img-carousel'/>
        </SplideSlide>
        <SplideSlide>
            <img src={segundaImg} alt="Image 2" className='img-carousel'/>
        </SplideSlide>
        <SplideSlide>
            <img src={terceraImg} alt="Image 3" className='img-carousel'/>
        </SplideSlide>
    </Splide>
  )
}
