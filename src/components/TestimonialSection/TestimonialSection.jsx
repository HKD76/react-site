import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

import "./TestimonialSection.css";

const testimonials = [
  {
    name: "Marc Leriche",
    job: "Dir. Operations chez APTAR",
    image: "/images/marc.png",
    text: `“L’avantage de RealTiMES, c’est qu’il donne toujours une explication précise au problème rencontré et que le problème en question ne peut faire l’objet d’aucune interprétation. RealTiMES nous a apporté un gain d’organisation beaucoup plus flagrant qu’en technique pure. Notre taux de rentabilité synthétique (TRS) a en effet progressé de 15 points. Je le qualifie d’outil d’amélioration continue.”`,
  },
  {
    name: "David Léguillon",
    job: "Dir. Operations chez MSD",
    image: "/images/david.png",
    text: `“En tant que Directeur des opérations dans l'usine MSD à Igoville, j'ai choisis de faire confiance à RealTiMES pour notre système d'amélioration continue. En quelques semaines seulement après l'installation du système, nous avons connu un gain de productivité de +25%.”`,
  },
];

export default function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <img
        src="/images/black-top-shape.svg"
        alt=""
        className="black-top-shape"
      />

      <div className="testimonial-background">
        <div className="testimonial-container">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 8000 }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={40}
            centeredSlides={true}
            slidesPerView={1}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-slide">
                  <div className="testimonial-author">
                    <div className="testimonial-client">
                      <div className="testimonial-avatar">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>

                      <div className="testimonial-info">
                        <h3 className="testimonial-name">{testimonial.name}</h3>
                        <p className="testimonial-job">{testimonial.job}</p>
                      </div>
                    </div>
                    <div className="rating">
                      <div className="star">
                        <img src="/images/stars.svg" alt="star" />
                      </div>
                      <div className="star">
                        <img src="/images/stars.svg" alt="star" />
                      </div>
                      <div className="star">
                        <img src="/images/stars.svg" alt="star" />
                      </div>
                      <div className="star">
                        <img src="/images/stars.svg" alt="star" />
                      </div>
                      <div className="star">
                        <img src="/images/stars.svg" alt="star" />
                      </div>
                    </div>
                  </div>

                  <div className="testimonial-text">
                    <p>{testimonial.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
