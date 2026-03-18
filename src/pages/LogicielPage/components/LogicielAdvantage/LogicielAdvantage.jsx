import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";
import LogicielAdvantageCards from "./LogicielAdvantageCards/LogicielAdvantageCards";
import "./LogicielAdvantage.css";

export default function LogicielAdvantage() {
  const MotionLink = motion(Link);
  return (
    <section id="logiciel-advantage" className="logiciel-advantage">
      <motion.div
        className="logiciel-advantage-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeInUpItem} className="logiciel-advantage-title">
          Un <span className="highlight">logiciel TRS-MES</span> aux multiples
          avantages
        </motion.h2>
        <motion.p variants={fadeInUpItem} className="page-subtitle">
          un suivi de performance simplifié et connecté
        </motion.p>
        <LogicielAdvantageCards />
        <MotionLink variants={fadeInUpItem} to="/ressources/blog" className="logiciel-advantage-link">
          Les 7 avantages RealTiMES
        </MotionLink>
      </motion.div>
    </section>
  );
}
