import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";
import "./QualitySection.css";

export default function QualitySection() {
  const MotionLink = motion(Link);
  return (
    <section className="quality-section">
      <motion.div
        className="container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="quality-card">
          <motion.div variants={fadeInUpItem} className="quality-image">
            <img
              src="/images/Working-at-food-plant-1022298.webp"
              alt="opérateur production tablette"
            />
          </motion.div>

          <div className="quality-content">
            <motion.h2 variants={fadeInUpItem}>
              <span className="highlight">Autocontrôles</span> fréquentiels sur
              ligne via une tablette opérateur.
            </motion.h2>
            <motion.p variants={fadeInUpItem} className="quality-text">
              Les opérateurs réalisent leurs autocontrôles directement sur
              tablette, ce qui fiabilise les contrôles, renforce la traçabilité
              et réduit les erreurs de saisie. Intégré au projet MES RealTiMES,
              ce module digitalise les routines qualité et améliore la
              réactivité sur ligne.
            </motion.p>

            <motion.div variants={fadeInUpItem} className="quality-highlight">
              <span className="quality-highlight-title">Contrôle qualité</span>

              <img src="/images/controle-qualite.svg" alt="picto qualité" />
            </motion.div>

            <MotionLink to="/solution/votre-projet-mes" className="card-button">
              Construire votre projet MES
            </MotionLink>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
