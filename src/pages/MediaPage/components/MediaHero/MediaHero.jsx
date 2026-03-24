import "./MediaHero.css";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function MediaHero() {
  return (
    <motion.section
      className="media-hero"
      variants={fadeInUpContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="media-hero-container">
        <motion.h2 variants={fadeInUpItem} className="title">Media</motion.h2>
        <motion.p variants={fadeInUpItem} className="page-subtitle">Parutions : Presse et Vidéos</motion.p>
      </div>
      <div className="media-hero-content">
        <motion.div variants={fadeInUpItem} className="media-hero-card">
          <div className="media-hero-card-content">
            <h3 className="media-hero-card-title">
              Découvrez (bientôt) notre chaîne Youtube
            </h3>
            <a className="media-hero-card-button" href="#">
              Chaîne YT RealTiMES
            </a>
          </div>
          <div className="media-hero-card-image">
            <img src="/images/reproduction-logo.svg" alt="Logo RealTiMES" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
