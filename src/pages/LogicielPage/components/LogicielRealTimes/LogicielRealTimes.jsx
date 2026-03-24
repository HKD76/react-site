import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";
import "./LogicielRealTimes.css";

export default function LogicielRealTimes() {
  const MotionLink = motion(Link);
  return (
    <section className="logiciel-realtimes">
      <motion.div
        className="logiciel-realtimes-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="logiciel-realtimes-content">
          <motion.p variants={fadeInUpItem} className="logiciel-realtimes-label">RealTiMES</motion.p>
          <motion.h2 variants={fadeInUpItem} className="logiciel-realtimes-title">
            Solution de suivie connectée et sécurisée
          </motion.h2>
          <motion.p variants={fadeInUpItem} className="logiciel-realtimes-text">
            Collecte de vos données de production automatique. Affichage en
            temps réel de la performance en atelier. Partage de l’information en
            temps réel dans toute l’usine.
          </motion.p>
          <motion.p variants={fadeInUpItem} className="logiciel-realtimes-text">
            L'hébergement de vos données est sur votre serveur, mais une
            solution "CLOUD" existe sur demande
          </motion.p>
          <motion.p variants={fadeInUpItem} className="logiciel-realtimes-text">
            Accès en illimité à toutes les données enregistrées sur la ligne.
            Rapports de performance personnalisables. Suivi des enregistrements
            composants et des contrôles.
          </motion.p>
          <MotionLink variants={fadeInUpItem} to="/demander-une-demo" className="logiciel-realtimes-button">
            {" "}
            Demander une démo
          </MotionLink>
        </div>
        <motion.div variants={fadeInUpItem} className="logiciel-realtimes-image">
          <img
            src="/images/a-propos-realtimes_1a-propos-realtimes.webp"
            alt="A propos de Realtimes"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
