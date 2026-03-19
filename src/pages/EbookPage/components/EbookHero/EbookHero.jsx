import "./EbookHero.css";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function EbookHero() {
  return (
    <section className="ebook-hero">
      <motion.div
        className="ebook-hero-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeInUpItem} className="ebook-hero-title">
          Guides pdf du technicien industriel
        </motion.h2>
        <motion.p variants={fadeInUpItem} className="ebook-hero-subtitle">
          conseils en lean management et lean manufacturing afin de booster
          votre productivité
        </motion.p>
        <motion.div variants={fadeInUpItem} className="ebook-hero-card">
          <div className="ebook-hero-card-content">
            <h3 className="ebook-hero-card-title">
              Les indicateurs indispensables
            </h3>
            <p className="ebook-hero-card-text">
              La performance industrielle est la capacité d'une entreprise à
              produire sans défaut, à moindre coût et dans les délais. Elle se
              mesure par des indicateurs clés évaluant la productivité, la
              qualité, la flexibilité et la satisfaction client. Cet e-book vous
              présente 9 indicateurs essentiels pour optimiser la production et
              stimuler la croissance de votre usine. Tous ces indicateurs sont
              présents dans notre solution de suivi en temps réel{" "}
              <span className="highlight">RealTiMES..</span>
            </p>
            <a
              href="/Indicateurs-de-Performance-Industrielle-RealTiMES-compressé.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ebook-hero-card-button"
            >
              Télécharger le guide
            </a>
          </div>
          <div className="ebook-hero-card-image">
            <img
              src="/images/Indicateurs-de-Performance-Industrielle-RealTiMES-compressé_1Indicateurs-de-Performance-Industrielle-RealTiMES-compressé.webp"
              alt="Indicateurs de performance industrielle"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
