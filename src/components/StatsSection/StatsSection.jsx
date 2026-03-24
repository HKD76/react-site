import "./StatsSection.css";
import { motion } from "framer-motion";
import { fadeInUpContainer, fadeInUpItem } from "../../animation/animation";

export default function StatsSection() {
  return (
    <section className="stats-section">
      <motion.div
        className="container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="stats-container">
          <motion.div variants={fadeInUpItem} className="stats-card">
            <h2>50+</h2>
            <p className="stats-text">systèmes RealTiMES installées</p>
          </motion.div>
          <motion.div variants={fadeInUpItem} className="stats-card">
            <h2>200%</h2>
            <p className="stats-text">de gain de productivité cumulé</p>
          </motion.div>
          <motion.div variants={fadeInUpItem} className="stats-card">
            <h2>48h</h2>
            <p className="stats-text">
              de mise en place sur votre ligne de prod.
            </p>
          </motion.div>
          <motion.div variants={fadeInUpItem} className="stats-card">
            <h2>RTBOX</h2>
            <p className="stats-text">Notre module de captation des arrêts</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
