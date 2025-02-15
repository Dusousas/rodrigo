import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperInstance } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { EffectFade, Navigation } from 'swiper/modules';
import Coffes from './subc/Coffes';
import MilkShake from './subc/MilkShake';

export default function Main() {
    // Referência para o Swiper
    const swiperRef = useRef<SwiperInstance | null>(null);

    // Funções para navegação
    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <section className='bg-white maxW pt-20'>
            <div>
                <h5 className='text-Browp text-center text-xl italic tracking-wider mb-6'>Nosso Cardápio</h5>

                <Swiper
                    onSwiper={(swiper) => { swiperRef.current = swiper; }}               
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    modules={[EffectFade, Navigation]}>
                    <SwiperSlide>
                        <Coffes />
                    </SwiperSlide>

                    <SwiperSlide>
                        <MilkShake />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
