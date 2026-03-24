import CardsSlider from "../../../../components/CardsSlider/CardsSlider";
import cards from "../../../../data/cards";
import "./ContactHero.css";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <motion.div
        className="contact-hero-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="contact-hero-card">
          <motion.div
            variants={fadeInUpItem}
            className="contact-hero-card-content"
          >
            <h2 className="contact-hero-card-label">
              Contactez un ingénieur Lean RealTiMES
            </h2>
            <h3 className="contact-hero-card-title">
              <span className="highlight">Optimisez</span> votre productivité
              dès aujourd'hui
            </h3>
          </motion.div>
          <CardsSlider cards={cards} />
          <motion.p variants={fadeInUpItem} className="contact-hero-card-text">
            <span className="highlight">Adresse</span> : 10 a rue du Maréchal de
            Lattre de Tassigny 76420 BIHOREL
          </motion.p>
          <motion.p variants={fadeInUpItem} className="contact-hero-card-text">
            <span className="highlight">Nous joindre :‍</span> 02 55 42 02 89
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
