import "./CasHero.css";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function CasHero() {
  return (
    <section className="cas-hero">
      <motion.div
        className="cas-hero-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeInUpItem} className="title">
          Cas clients RealTiMES : le suivi de performance par secteur
        </motion.h2>
        <motion.p variants={fadeInUpItem} className="cas-hero-text">
          Nos clients industriels sont confrontées à plusieurs défis en matière
          de <span className="highlight">lean management</span> et de{" "}
          <span className="highlight">lean manufacturing :</span>
        </motion.p>
        <ul>
          <motion.li className="cas-hero-text" variants={fadeInUpItem}>
            - Gestion efficace des flux de production (réduire le gaspillage, le
            temps d'attente, optimiser la productivité)
          </motion.li>
          <motion.li variants={fadeInUpItem} className="cas-hero-text">
            - Gestion des stocks
          </motion.li>
          <motion.li variants={fadeInUpItem} className="cas-hero-text">
            - Gestion de la qualité (et sécurité alimentaire)
          </motion.li>
          <motion.li variants={fadeInUpItem} className="cas-hero-text">
            - Flexibilité opérationnelle
          </motion.li>
          <motion.li variants={fadeInUpItem} className="cas-hero-text">
            - Implication du personnel
          </motion.li>
        </ul>
        <motion.p variants={fadeInUpItem} className="cas-hero-text">
          Notre rôle est de leur apporter une flexibilité opérationnelle grâce à
          un suivi de production en temps réel tout en mettant à leur
          disposition des outils de management visuel afin d'impliquer
          facilement leur personnel.
        </motion.p>
        <motion.p variants={fadeInUpItem} className="cas-hero-text">
          <span className="highlight">RealTiMES</span> permet à tous ces acteurs
          de répondre aux exigences de leurs marchés.
        </motion.p>
      </motion.div>
    </section>
  );
}
