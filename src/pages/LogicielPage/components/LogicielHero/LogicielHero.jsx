import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUpContainer, fadeInUpItem } from "../../../../animation/animation";
import "./LogicielHero.css";

export default function LogicielHero() {
  return (
    <section className="logiciel-hero">
      <motion.div
        className="page-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h1 variants={fadeInUpItem} className="title">Logiciel MES/TRS personnalisable</motion.h1>
        <motion.p variants={fadeInUpItem} className="page-subtitle">
          Dites Aurevoir aux relevés manuels et Bienvenue dans l'ère de
          l'industrie 4.0
        </motion.p>
        <motion.div variants={fadeInUpItem} className="logiciel-hero-buttons">
          <a href="#logiciel-advantage" className="logiciel-hero-button">
            Les avantages
          </a>
          <Link to="/demander-une-demo" className="button-secondary">
            Demander une démo
          </Link>
        </motion.div>
        <motion.div variants={fadeInUpItem} className="logiciel-hero-image">
          <img
            src="/images/suivi-production-temps-reel-p-1080.webp"
            alt="Suivi de production"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
