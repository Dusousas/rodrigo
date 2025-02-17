"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const depoimentos = [
  {
    texto: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ducimus ex accusamus aperiam illum minima eum alias! Eaque nemo accusantium, sapiente quas molestiae excepturi corrupti sequi blanditiis dicta? Consequatur voluptatibus est quis, atque porro soluta.",
    nome: "Eduardo Sousa",
  },
  {
    texto: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ducimus ex accusamus aperiam illum minima eum alias! Eaque nemo accusantium, sapiente quas molestiae excepturi corrupti sequi blanditiis dicta? Consequatur voluptatibus est quis, atque porro soluta.",
    nome: "Mariana Almeida",
  },
  {
    texto: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ducimus ex accusamus aperiam illum minima eum alias! Eaque nemo accusantium, sapiente quas molestiae excepturi corrupti sequi blanditiis dicta? Consequatur voluptatibus est quis, atque porro soluta.",
    nome: "Lucas Pereira",
  },
];

export default function Depoimentos() {
  return (
    <section className="bg-white maxW py-20">
      <div className="px-4 md:px-12 flex flex-col items-center justify-center">
        <h1 className="text-7xl text-Browp">"</h1>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          className="w-full"
        >
          {depoimentos.map((item, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <h5 className="text-Blackp text-center italic text-lg">
                {item.texto}
              </h5>
              <h1 className="text-Blackp text-center mt-4 text-lg uppercase">
                {item.nome}
              </h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
