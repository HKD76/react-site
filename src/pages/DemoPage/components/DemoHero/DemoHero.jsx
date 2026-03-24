import "./DemoHero.css";
import { motion } from "framer-motion";
import { fadeInUpContainer, fadeInUpItem } from "../../../../animation/animation";

export default function DemoHero() {
  return (
    <section className="demo-hero">
      <motion.div
        className="demo-hero-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUpItem} className="demo-hero-content">
          <p className="demo-hero-label">Demander une démo</p>
          <h2 className="title">
            Optimisez votre productivité dès aujourd'hui
          </h2>
        </motion.div>
        <motion.div variants={fadeInUpItem} className="demo-hero-image">
          <img
            src="/images/Dashboard-realtimes-vecto-p-1080.webp"
            alt="Suivi de production"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
