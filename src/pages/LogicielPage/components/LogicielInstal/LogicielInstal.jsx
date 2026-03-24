import "./LogicielInstal.css";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function LogicielInstal() {
  return (
    <section className="logiciel-instal">
      <motion.div
        className="logiciel-instal-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="logiciel-instal-card">
          <motion.div variants={fadeInUpItem} className="logiciel-instal-content">
            <h2 className="logiciel-instal-title">
              <span className="highlight">Installation rapide</span> en 48h sur
              votre ligne de production
            </h2>
            <p className="logiciel-instal-text">
              Grâce à leur intégration externe, les systèmes tout-en-un de
              <span className="highlight"> RealTiMES</span> peuvent être
              installés rapidement dans un très grand nombre de situations de
              production et sont compatibles avec la majorité des équipements.
              Cette solution offre un moyen efficace d'améliorer les{" "}
              <span className="highlight">taux de disponibilité</span> et de{" "}
              <span className="highlight">réduire les arrêts machine.</span>
            </p>
          </motion.div>
          <motion.div variants={fadeInUpItem} className="logiciel-instal-image">
            <img
              src="/images/suivi-trs-production-p-1080.webp"
              alt="Suivi Trs"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
