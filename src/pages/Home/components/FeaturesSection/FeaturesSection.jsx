import "./FeaturesSection.css";
import CardsSlider from "../../../../components/CardsSlider/CardsSlider.jsx";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation.js";

export default function FeaturesSection({ cards }) {
  return (
    <section className="features-section">
      <div className="features-container">
        <motion.div
          className="section-header"
          variants={fadeInUpContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeInUpItem}>
            <span className="highlight">Un suivi</span> de production clair,
            fluide et
            <span className="highlight"> 100% en temps réel</span>
          </motion.h2>

          <motion.p variants={fadeInUpItem}>
            Mode industrie 4.0 enclenché avec une solution compatible ERP pour
            une gestion optimale.
          </motion.p>
        </motion.div>

        <motion.div variants={fadeInUpContainer} className="features-slider">
          <CardsSlider cards={cards} />
        </motion.div>
      </div>
    </section>
  );
}
