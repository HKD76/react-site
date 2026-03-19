import "./MediaPress.css";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function MediaPress() {
  return (
    <section className="media-press">
      <motion.div
        className="media-press-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="media-press-content">
          <motion.h2 variants={fadeInUpItem} className="media-press-title">
            Les parutions en presses de RealTiMES
          </motion.h2>
          <motion.p variants={fadeInUpItem} className="media-press-text">
            Cliquer sur l'icon "Voir" en face de chaque Media pour visualiser la
            parution presse.
          </motion.p>
        </div>
        <motion.div variants={fadeInUpItem} className="media-press-subcontent">
          <div className="media-press-image">
            <img
              src="/images/lusine-nouvelle_logo_mod_1.webp"
              alt="Logo l'usine nouvelle"
            />
          </div>
          <div className="media-press-button">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="media-press-link"
              href="/Realtimes-Industrie-Nouvelle-2023.pdf"
            >
              Voir l'article
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
