import TimeLine from "../TimeLine/TimeLine";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";
import "./ProjetStep.css";

export default function ProjetStep() {
  return (
    <section className="projet-step">
      <motion.div
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="projet-step-container"
      >
        <motion.h2 variants={fadeInUpItem} id="timeline" className="projet-step-title">
          Vous êtes à 48h de booster votre productivité jusqu'à 30%
        </motion.h2>
        <motion.p variants={fadeInUpItem} className="page-subtitle">
          Votre projet MES adapté pour votre usine de production
        </motion.p>
        <motion.div variants={fadeInUpItem} className="projet-step-content">
          <TimeLine />
        </motion.div>
      </motion.div>
    </section>
  );
}
