import "./AboutStory.css";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function StorySection() {
  return (
    <section className="story-section">
      <motion.div
        className="story-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUpItem} className="story-content">
          <p className="story-label">L'HISTOIRE</p>
          <h2 className="story-title">Expert en suivi de production</h2>
          <p className="story-text">
            Depuis 2006 nous proposons aux industriels, une solution de suivi de
            production en temps réel, à la fois simple à mettre en œuvre et
            performante : <span className="highlight">RealTiMES</span>
          </p>
          <p className="story-text">
            Améliorer la performance de vos machines de production en mettant en
            place un management visuel en temps réel.
          </p>
          <p className="story-text">
            Nous sommes à votre service pour répondre à vos questions.
          </p>
        </motion.div>
        <motion.div variants={fadeInUpItem} className="story-image">
          <img
            src="/images/Dashboard-realtimes-vecto-p-1080.webp"
            alt="Dashboard"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
