import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUpContainer, fadeInUpItem } from "../../../../animation/animation";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <header className="hero-section">
      <div className="container">
        <motion.div
          className="hero-content"
          variants={fadeInUpContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h1 variants={fadeInUpItem}>
            Logiciel de gestion de production industrielle en temps réel
          </motion.h1>

          <motion.div variants={fadeInUpItem} className="hero-buttons">
            <Link to="/solution/logiciel-trs" className="button">
              Solution complète de suivi
            </Link>

            <Link to="/demander-une-demo" className="button secondary">
              Demander une démo
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/Dashboard-suivi-production-industrielle_1.avif"
            alt="Dashboard suivi de production client RealTiMES"
            loading="eager"
          />
        </motion.div>
      </div>
    </header>
  );
}
