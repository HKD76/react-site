import "./AboutReliability.css";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function AboutReliability() {
  return (
    <section className="about-reliability">
      <motion.div
        className="about-reliability-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUpItem} className="about-reliability-content">
          <h2 className="about-reliability-title">Une fiabilité inégalée</h2>
          <p className="about-reliability-text">
            La RTBOX est composée d’un automate industriel qui permet au système
            de bénéficier d’une extraordinaire fiabilité ainsi qu’une durée de
            vie de plus de 15 ans aujourd’hui sans se préoccuper du suivi de la
            vie du produit.
          </p>
          <p className="about-reliability-text">
            Pour le moment, les composants qui équipent la RTBOX ont encore une
            durée d’existence d’au moins 5 ans. La connectique de la RTBOX est
            elle aussi industrielle avec des connecteurs M12 permettant de
            connecter directement les principaux capteurs du marché.
          </p>
        </motion.div>
        <motion.div variants={fadeInUpItem} className="about-reliability-image">
          <img
            src="/images/suivi-production-realtimes-p-1080.webp"
            alt="Suivi de production"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
