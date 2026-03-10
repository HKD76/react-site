import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./CardsSlider.css";

export default function CardsSlider({ cards }) {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      spaceBetween={24}
      slidesPerView={3}
      loop={true}
      autoplay={{ delay: 4000 }}
      breakpoints={{
        0: { slidesPerView: 1 },
        700: { slidesPerView: 2 },
        1100: { slidesPerView: 3 }
      }}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <div className="slider-card">
            <div className="icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}