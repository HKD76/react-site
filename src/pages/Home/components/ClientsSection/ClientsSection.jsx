import "./ClientsSection.css";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function ClientsSection({ clientLogos }) {
  return (
    <section className="clients-section">
      <motion.div
        className="container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="clients-text">
          <motion.p variants={fadeInUpItem}>
            Nos clients sont des références internationales et ils ont opté pour
            notre logiciel de suivi de production en temps réel, optimisant
            ainsi leurs processus de fabrication et la gestion de leurs
            ressources.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
