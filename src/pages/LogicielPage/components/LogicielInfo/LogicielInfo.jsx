import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";
import "./LogicielInfo.css";

export default function LogicielInfo() {
  const MotionLink = motion(Link);
  return (
    <section className="logiciel-info">
      <motion.div
        className="logiciel-info-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="logiciel-info-content">
          <motion.p variants={fadeInUpItem} className="logiciel-info-label">Les avantages</motion.p>
          <motion.h2 variants={fadeInUpItem} className="logiciel-info-title">De l'analyse à l'action</motion.h2>
          <motion.p variants={fadeInUpItem} className="logiciel-info-text">
            Permet de quantifier en temps réel les opportunités de gains et de
            mesurer les résultats obtenus
          </motion.p>
          <motion.p variants={fadeInUpItem} className="logiciel-info-text">
            Dans un contexte de rareté des ressources, RealTiMES permet
            d'identifier et de diminuer les gaspillages
          </motion.p>
          <motion.p variants={fadeInUpItem} className="logiciel-info-text">
            Suppression des enregistrements manuels. Données exportables et
            imprimables. Support technique à distance.
          </motion.p>
          <motion.p variants={fadeInUpItem} className="logiciel-info-text">
            Identification rapide et précise des causes des arrêts de production
            avec des recommandations pour améliorer la performance.
          </motion.p>
          <MotionLink variants={fadeInUpItem} to="/demander-une-demo" className="logiciel-info-button">
            {" "}
            Demander une démo
          </MotionLink>
        </div>
        <motion.div variants={fadeInUpItem} className="logiciel-info-image">
          <img
            src="/images/amelioration-continue-production-p-800.webp"
            alt="Amelioration continue"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
