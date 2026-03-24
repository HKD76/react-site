import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";
import "./ProjetHero.css";

export default function ProjetHero() {
  return (
    <section className="projet-hero">
      <motion.div
        className="projet-hero-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="projet-hero-content">
          <motion.h2 variants={fadeInUpItem} className="projet-hero-title">
            Votre <span className="highlight">projet MES</span> sur projet MES
            en 4 étapes
          </motion.h2>
          <motion.p variants={fadeInUpItem} className="projet-hero-text">
            Vous cherchez à optimiser votre système de production ? Découvrez
            notre solution numérique d'amélioration de la performance sur votre
            ligne de production.
          </motion.p>
          <motion.div variants={fadeInUpItem} className="projet-hero-buttons">
            <a className="projet-hero-button" href="#timeline">
              Les étapes
            </a>
            <Link to="demander-une-demo" className="button-secondary">
              Demander une demo
            </Link>
          </motion.div>
        </div>
        <motion.div variants={fadeInUpItem} className="projet-hero-image">
          <img src="/images/projet-mes-realtimes-p-500.webp" alt="Projet MES" />
        </motion.div>
      </motion.div>
    </section>
  );
}
