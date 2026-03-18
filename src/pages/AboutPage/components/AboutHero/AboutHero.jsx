import "./AboutHero.css";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <motion.div
        className="about-hero-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUpItem} className="about-hero-square">
          <div className="about-hero-content">
            <h2 className="title">
              La solution pour votre{" "}
              <span className="highlight">
                suivi de production industrielle
              </span>{" "}
            </h2>
            <p className="page-subtitle">
              Tout savoir sur <span className="highlight">RealTiMES</span>
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUpItem} className="about-hero-square">
          <img
            src="/images/a-propos-realtimes_2-p-800.webp"
            alt="graphique gain productivité"
          />
        </motion.div>
        <motion.div variants={fadeInUpItem} className="about-hero-square">
          <img
            src="/images/amelioration-continue-production-p-800.webp"
            alt="graphique gain productivité"
          />
        </motion.div>
        <motion.div variants={fadeInUpItem} className="about-hero-square">
          <img
            src="/images/code-barre-arrets-production-p-800.webp"
            alt="graphique gain productivité"
          />
        </motion.div>
      </motion.div>
      <p className="about-hero-text">
        Nos clients sont des références internationales
      </p>
    </section>
  );
}
