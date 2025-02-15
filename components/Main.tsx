import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { EffectFade, Navigation } from 'swiper/modules';
import Slider1 from './subc/Slider1';
import Slider2 from './subc/Slider2';


export default function Main() {
  // Referência para o Swiper
  const swiperRef = useRef<any>(null);

  // Funções para navegação
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev(); // Navegar para o slide anterior
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext(); // Navegar para o próximo slide
    }
  };

  return (
    <section className="maxW">
      <div>
        <Swiper
          ref={swiperRef} // Referência adicionada ao Swiper
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          modules={[EffectFade, Navigation]}
        >
          <SwiperSlide>
            <Slider1 />
          </SwiperSlide>
          <SwiperSlide>
            <Slider2 />
          </SwiperSlide>
        </Swiper>


      </div>
    </section>
  );
}
