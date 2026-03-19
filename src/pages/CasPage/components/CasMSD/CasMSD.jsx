import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";
import "./CasMSD.css";

export default function CasMSD() {
  const [open, setOpen] = useState(false);
  return (
    <section className="cas-msd">
      <motion.div
        className="cas-msd-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUpItem} className="cas-msd-content">
          <div className="cas-msd-content-header">
            <h2 className="cas-msd-content-header-title">Santé animale</h2>
            <div className="cas-msd-content-header-logo">
              <img src="/images/msd-color.webp" alt="MSD Logo" />
            </div>
          </div>
          <p className="cas-msd-content-text">
            L'industrie pharmaceutique représente l'un de nos plus grands
            secteurs d'application. La rigueur de qualité et l'exigence
            opérationnelle sont les deux raisons principales de nos clients
            lorsqu'ils nous solicitent pour l'amélioration continue du système
            de production.
          </p>
        </motion.div>
        <motion.div variants={fadeInUpItem} className="cas-msd-subcontent" onClick={() => setOpen(!open)}>
          <div className="cas-msd-subtext">
            <p className="cas-msd-subtext-title">Cas client MSD</p>
            <div className={`cas-msd-subtext-cross ${open ? "open" : ""}`}>
              <img src="/images/plus.svg" alt="cross" />
            </div>
          </div>
        </motion.div>
        <div className={`cas-msd-slide ${open ? "open" : ""}`}>
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
              <div className="cas-msd-image">
                <img src="/images/Ecran_msd_1-p-800.webp" alt="Ecran MSD" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cas-msd-image">
                <img src="/images/Ecran_Msd_2-p-800.webp" alt="Ecran MSD 2" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
}
