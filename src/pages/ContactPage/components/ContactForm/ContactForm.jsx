import "./ContactForm.css";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function TarifForm() {
  return (
    <section className="contact-form">
      <motion.div
        className="contact-form-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUpItem} id="contact-form" className="contact-form-card">
          <form className="contact-form-card-content" action="">
            <div className="contact-form-card-field">
              <label className="contact-form-card-label" htmlFor="nom">
                Nom
              </label>
              <input
                className="contact-form-card-input"
                name="nom"
                type="text"
                placeholder="Nom"
              />
            </div>
            <div className="contact-form-card-field">
              <label className="contact-form-card-label" htmlFor="prenom">
                Prénom
              </label>
              <input
                className="contact-form-card-input"
                name="prenom"
                type="text"
                placeholder="Prenom"
              />
            </div>
            <div className="contact-form-card-field">
              <label className="contact-form-card-label" htmlFor="email">
                Email
              </label>
              <input
                className="contact-form-card-input"
                name="email"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="contact-form-card-field">
              <label className="contact-form-card-label" htmlFor="entreprise">
                Entreprise
              </label>
              <input
                className="contact-form-card-input"
                name="entreprise"
                type="text"
                placeholder="Entreprise"
              />
            </div>
            <div className="contact-form-card-field full">
              <label className="contact-form-card-label" htmlFor="num">
                Téléphone
              </label>
              <input
                className="contact-form-card-input"
                name="num"
                type="text"
                placeholder="Votre numéro"
              />
            </div>
            <div className="contact-form-card-field full">
              <label className="contact-form-card-label" htmlFor="texte">
                Quel est votre message ?
              </label>
              <textarea
                className="contact-form-card-input"
                name="texte"
                id="textearea"
              ></textarea>
            </div>
            <button className="contact-form-card-button" type="submit">
              Envoyer
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
