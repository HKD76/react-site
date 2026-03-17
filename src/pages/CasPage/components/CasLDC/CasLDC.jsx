import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import "./CasLDC.css";

export default function CasLDC() {
  const [open, setOpen] = useState(false);
  return (
    <section className="cas-ldc">
      <div className="cas-ldc-container">
        <div className="cas-ldc-content">
          <div className="cas-ldc-content-header">
            <h2 className="cas-ldc-content-header-title">Éleveur agricole</h2>
            <div className="cas-ldc-content-header-logo">
              <img src="/images/ldc-color.webp" alt="ldc Logo" />
            </div>
          </div>
          <p className="cas-ldc-content-text">
            Les éleveurs font face à des enjeux importants de qualité et
            traçabilité des produits et optimisation des processus agricoles.
            Pour eux, la solution RealTiMES est un vrai atout.
          </p>
        </div>
        <div className="cas-ldc-subcontent" onClick={() => setOpen(!open)}>
          <div className="cas-ldc-subtext">
            <p className="cas-ldc-subtext-title">Cas client LDC</p>
            <div className={`cas-ldc-subtext-cross ${open ? "open" : ""}`}>
              <img src="/images/plus.svg" alt="cross" />
            </div>
          </div>
        </div>
        <div className={`cas-ldc-slide ${open ? "open" : ""}`}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="cas-ldc-image">
                <img src="/images/Ecran_Loué-p-800.webp" alt="Ecran ldc" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cas-ldc-image">
                <img src="/images/Ecran_Loué_2-p-800.webp" alt="Ecran ldc 2" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
