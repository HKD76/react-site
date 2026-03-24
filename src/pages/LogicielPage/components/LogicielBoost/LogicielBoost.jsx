import "./LogicielBoost.css";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function LogicielBoost() {
  return (
    <section className="logiciel-boost">
      <motion.div
        className="logiciel-boost-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="logiciel-boost-content">
          <motion.h2 variants={fadeInUpItem} className="logiciel-boost-title">
            Boostez votre{" "}
            <span className="highlight">performance industrielle</span> en
            impliquant vos équipes{" "}
          </motion.h2>
          <motion.p variants={fadeInUpItem} className="logiciel-boost-text">
            Avec des{" "}
            <span className="highlight">
              tableaux de bord personnalisables et collaboratifs
            </span>
            , le système de suivi de production industrielle RealTiMES offre une
            visibilité accrue et en temps réel sur les performances de
            production. Ce qui favorise une meilleure prise de décision et une
            plus grande motivation du personnel qui possède une vision claire et
            instantanée de sa capacité de production. Les outils d'analyse
            permettent l'amélioration continue de la qualité.
          </motion.p>
          <div className="logiciel-boost-cards">
            <motion.div variants={fadeInUpItem} className="logiciel-boost-card">
              <div className="logiciel-boost-image">
                <img
                  src="/images/suivi-productivité_1suivi-productivité.webp"
                  alt="Suivi de productivité"
                />
              </div>
              <h3 className="logiciel-boost-card-title">Motivation</h3>
              <p className="logiciel-boost-card-text">
                Libérez le potentiel des équipes avec un ROI en moins 12 mois !
              </p>
            </motion.div>
            <motion.div variants={fadeInUpItem} className="logiciel-boost-card">
              <div className="logiciel-boost-image">
                <img
                  src="/images/suivi-arrêts_1suivi-arrêts.webp"
                  alt="Suivi des arrêts"
                />
              </div>
              <h3 className="logiciel-boost-card-title">Collaboration</h3>
              <p className="logiciel-boost-card-text">
                Un outil collaboratif et transparent pour impliquer les équipes
                et donner de l’autonomie
              </p>
            </motion.div>
            <motion.div variants={fadeInUpItem} className="logiciel-boost-card">
              <div className="logiciel-boost-image">
                <img
                  src="/images/Dashboard-realtimes-vecto-p-800.webp"
                  alt="Dashboard RealTiMES"
                />
              </div>
              <h3 className="logiciel-boost-card-title">Accès utilisateur</h3>
              <p className="logiciel-boost-card-text">
                Les accès utilisateurs sont limités vous assurant un contrôle
                complet
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
