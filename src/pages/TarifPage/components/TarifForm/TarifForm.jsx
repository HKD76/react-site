import "./TarifForm.css";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function TarifForm() {
  return (
    <section className="tarif-form">
      <motion.div
        className="tarif-form-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUpItem} id="tarif-form" className="tarif-form-card">
          <form className="tarif-form-card-content" action="">
            <div className="tarif-form-card-field">
              <label className="tarif-form-card-label" htmlFor="nom">
                Nom
              </label>
              <input
                className="tarif-form-card-input"
                name="nom"
                type="text"
                placeholder="Nom"
              />
            </div>
            <div className="tarif-form-card-field">
              <label className="tarif-form-card-label" htmlFor="prenom">
                Prénom
              </label>
              <input
                className="tarif-form-card-input"
                name="prenom"
                type="text"
                placeholder="Prenom"
              />
            </div>
            <div className="tarif-form-card-field">
              <label className="tarif-form-card-label" htmlFor="email">
                Email
              </label>
              <input
                className="tarif-form-card-input"
                name="email"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="tarif-form-card-field">
              <label className="tarif-form-card-label" htmlFor="entreprise">
                Entreprise
              </label>
              <input
                className="tarif-form-card-input"
                name="entreprise"
                type="text"
                placeholder="Entreprise"
              />
            </div>
            <div className="tarif-form-card-field full">
              <label className="tarif-form-card-label" htmlFor="num">
                Téléphone
              </label>
              <input
                className="tarif-form-card-input"
                name="num"
                type="text"
                placeholder="Votre numéro"
              />
            </div>
            <div className="tarif-form-card-field full">
              <label className="tarif-form-card-label" htmlFor="texte">
                À partir de quand souhaitez-vous intégrer notre solution ?
              </label>
              <textarea
                className="tarif-form-card-input"
                name="texte"
                id="textearea"
              ></textarea>
            </div>
            <button className="tarif-form-card-button" type="submit">
              Envoyer
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
