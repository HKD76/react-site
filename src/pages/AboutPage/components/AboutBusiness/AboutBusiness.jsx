import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";
import "./AboutBusiness.css";

export default function AboutBusiness() {
  return (
    <section className="about-business-section">
      <motion.div
        className="about-business-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUpItem} className="about-business-content">
          <h2 className="about-business-title">
            Outil de Business Intelligence (BI) intégré
          </h2>
          <p className="about-business-description">
            Permet de créer ses propres rapports
          </p>
          <p className="about-business-description">
            Non limité en terme d’utilisateurs et de tableaux de bord
          </p>
          <p className="about-business-description">
            Connecté à notre base de données. Mais peut être connecté à d’autres
            bases de données comme une pointeuse par exemple afin d'agréger la
            donnée existante.
          </p>
          <Link to="/demander-une-demo" className="card-button">
            Demander une démo
          </Link>
        </motion.div>
        <motion.div variants={fadeInUpItem} className="about-business-image">
          <img src="/images/collaboration-graphic.png" alt="Business" />
        </motion.div>
      </motion.div>
    </section>
  );
}
