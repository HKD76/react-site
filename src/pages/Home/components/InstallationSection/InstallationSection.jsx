import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";
import "./InstallationSection.css";

export default function InstallationSection() {
  const MotionLink = motion(Link);
  return (
    <section className="installation-section">
      <motion.div
        className="container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="installation-card">
          <div className="installation-content">
            <motion.h2 variants={fadeInUpItem}>
              <span className="highlight">RealTiMES</span> s’installe en 48h sur
              votre ligne de production
            </motion.h2>
            <motion.p variants={fadeInUpItem} className="installation-text">
              Installé en moins de 48h, RealTiMES collecte automatiquement vos
              données de production, calcule votre TRS en temps réel et
              s’intègre à vos systèmes existants. Une solution non intrusive qui
              améliore immédiatement la performance de vos lignes.
            </motion.p>

            <motion.div variants={fadeInUpItem} className="installation-highlight">
              <span className="installation-highlight-title">Installation</span>

              <img src="/images/installation.svg" alt="picto installation" />
            </motion.div>

            <MotionLink to="/solution/logiciel-trs" className="card-button">
              Logiciel TRS/MES personnalisable
            </MotionLink>
          </div>

          <motion.div variants={fadeInUpItem} className="installation-image">
            <img
              src="/images/suivi-trs-production.webp"
              alt="QR codes arrêts machine"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
