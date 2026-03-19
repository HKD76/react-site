import "./DemoForm.css";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function TarifForm() {
  return (
    <section className="form-form">
      <motion.div
        className="form-form-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          variants={fadeInUpItem}
          id="form-form"
          className="form-form-card"
        >
          <form className="form-form-card-content" action="">
            <div className="form-form-card-field">
              <label className="form-form-card-label" htmlFor="nom">
                Nom
              </label>
              <input
                className="form-form-card-input"
                name="nom"
                type="text"
                placeholder="Nom"
              />
            </div>
            <div className="form-form-card-field">
              <label className="form-form-card-label" htmlFor="prenom">
                Prénom
              </label>
              <input
                className="form-form-card-input"
                name="prenom"
                type="text"
                placeholder="Prenom"
              />
            </div>
            <div className="form-form-card-field">
              <label className="form-form-card-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-form-card-input"
                name="email"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="form-form-card-field">
              <label className="form-form-card-label" htmlFor="entreprise">
                Entreprise
              </label>
              <input
                className="form-form-card-input"
                name="entreprise"
                type="text"
                placeholder="Entreprise"
              />
            </div>
            <div className="form-form-card-field full">
              <label className="form-form-card-label" htmlFor="num">
                Téléphone
              </label>
              <input
                className="form-form-card-input"
                name="num"
                type="text"
                placeholder="Votre numéro"
              />
            </div>
            <button className="form-form-card-button" type="submit">
              Envoyer
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
