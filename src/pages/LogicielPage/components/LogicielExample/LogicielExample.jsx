import "./LogicielExample.css";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function LogicielExample() {
  return (
    <section className="logiciel-example">
      <motion.div
        className="logiciel-example-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeInUpItem} className="logiciel-example-title">
          Exemple de tableau de bord de suivi TRS
        </motion.h2>
        <motion.p variants={fadeInUpItem} className="logiciel-example-text">
          Le tableau de bord RealTiMES vous permet de visualiser en temps réel
          la disponibilité des machines, la performance, et la qualité de vos
          lignes de production. Cet affichage intuitif facilite l'identification
          des sources de perte et permet d’optimiser rapidement votre
          productivité.
        </motion.p>
        <motion.div variants={fadeInUpItem} className="logiciel-example-image">
          <img src="/images/Ecran_Loué.webp" alt="Ecran Loué" />
        </motion.div>
      </motion.div>
    </section>
  );
}
