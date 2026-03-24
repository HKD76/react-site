import "./AboutData.css";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function AboutData() {
  return (
    <section className="about-data">
      <motion.div
        className="about-data-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="about-data-card">
          <motion.div variants={fadeInUpItem} className="about-data-content">
            <h2 className="about-data-title">
              Meilleure catégorisation des données
            </h2>
            <p className="about-data-label">Aucune erreur possible</p>
            <p className="about-data-text">
              Arrêter de collecter les données à la main. La solution{" "}
              <span className="highlight">RealTiMES </span>
              catégorise tous les défauts parmi une liste de choix. Un meilleur
              suivi de production et une meilleure réactivité sont possibles
              grâce à un rapport envoyé dès le lendemain.
            </p>
          </motion.div>
          <motion.div variants={fadeInUpItem} className="about-data-image">
            <img src="/images/ecran-1080.webp" alt="Ecran Data" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
