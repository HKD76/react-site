import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./ClientsSlider.css";

import "swiper/css";

export default function ClientsSlider({ logos }) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={40}
      slidesPerView={5}
      loop={true}
      speed={4000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        900: { slidesPerView: 4 },
        1200: { slidesPerView: 5 },
      }}
    >
      {logos.map((logo, i) => (
        <SwiperSlide key={i}>
          <div className="logo-wrapper">
            <img src={logo.src} alt={logo.alt} className="logo" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}