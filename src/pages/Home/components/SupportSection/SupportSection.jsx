import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUpContainer, fadeInUpItem } from "../../../../animation/animation";
import "./SupportSection.css";

export default function SupportSection() {
  const MotionLink = motion(Link);
  return (
    <section className="support-section">
      <motion.div
        className="container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="support-card">
          <motion.div variants={fadeInUpItem} className="support-image">
            <img
              src="/images/collaboration-graphic.png"
              alt="collaboration interne"
            />
          </motion.div>

          <div className="support-content">
            <motion.h2 variants={fadeInUpItem}>
              <span className="highlight">Un dashboard</span> multi-utilisateurs
              + support client
            </motion.h2>
            <motion.p variants={fadeInUpItem} className="support-text">
              Le dashboard RealTiMES centralise les indicateurs clés pour tous
              les profils, du terrain à la direction. Associé à un support
              client réactif, il garantit un pilotage fiable et une utilisation
              optimale des données de production.
            </motion.p>

            <motion.div variants={fadeInUpItem} className="support-highlight">
              <span className="support-highlight-title">Support dédié</span>
              <img src="/images/support.svg" alt="picto support" />
            </motion.div>

            <MotionLink to="/clients/cas-clients" className="card-button">
              Ils nous font confiance
            </MotionLink>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
