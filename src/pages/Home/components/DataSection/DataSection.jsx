import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";
import "./DataSection.css";

export default function DataSection() {
  const MotionLink = motion(Link);
  return (
    <section className="data-section">
      <motion.div
        className="container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="data-card">
          <div className="data-content">
            <motion.h2 variants={fadeInUpItem}>
              <span className="highlight">RealTiMES</span> est un logiciel de
              suivi de production en temps réel qui améliore le TRS des
              industriels.
            </motion.h2>

            <motion.p variants={fadeInUpItem} className="data-text">
              Grâce à la RTBOX, à la collecte automatique des données et à des
              tableaux de bord BI, la solution offre une fiabilité
              exceptionnelle et un pilotage précis de vos lignes de production.
            </motion.p>

            <motion.div variants={fadeInUpItem} className="data-highlight">
              <span className="data-highlight-title">Data et analyses</span>

              <img src="/images/data.svg" alt="picto data" />
            </motion.div>

            <MotionLink variants={fadeInUpItem} to="/solution/a-propos-de-realtimes" className="card-button">
              La solution de suivi RealTiMES
            </MotionLink>
          </div>

          <motion.div variants={fadeInUpItem} className="data-image">
            <img
              src="/images/suivi-production-realtimes.webp"
              alt="graphique gain productivité"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
