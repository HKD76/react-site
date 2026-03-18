import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUpContainer, fadeInUpItem } from "../../animation/animation";
import "./TrySection.css";

export default function TrySection() {
  return (
    <motion.section
      className="try-section"
      variants={fadeInUpContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div variants={fadeInUpItem} className="try-container">
        <div className="try-image">
          <img
            src="/images/Dashboard-suivi-production-industrielle_1.avif"
            alt="QR codes arrêts machine"
          />
        </div>

        <div className="try-content">
          <h2 className="try-title">RealTiMES</h2>
          <p className="try-description">
            Demandez votre démo pour un aperçu réel
          </p>
          <Link to="/demander-une-demo" className="try-button">
            Demander une démo
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}
