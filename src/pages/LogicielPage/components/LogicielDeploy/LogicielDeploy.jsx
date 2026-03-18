import "./LogicielDeploy.css";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function LogicielDeploy() {
  return (
    <section className="logiciel-deploy">
      <motion.div
        className="logiciel-deploy-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="logiciel-deploy-card">
          <motion.div variants={fadeInUpItem} className="logiciel-deploy-content">
            <h2 className="logiciel-deploy-title">
              Déploiement et intégration simplifiés
            </h2>
            <p className="logiciel-deploy-text">
              Installation simple et adaptée à différents environnements
              industriels. <span className="highlight">RealTiMES</span> propose
              un accompagnement personnalisé pour une configuration ajustée à
              vos besoins spécifiques, ainsi qu’une formation complète pour vos
              équipes. Cette solution permet une utilisation optimale de
              l'atelier et{" "}
              <span className="highlight">
                améliore les performances des lignes de production.
              </span>
            </p>
          </motion.div>
          <motion.div variants={fadeInUpItem} className="logiciel-deploy-image">
            <img
              src="/images/a-propos-realtimes_1a-propos-realtimes.webp"
              alt="A propos"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
