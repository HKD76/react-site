import "./TarifFormTemp.css";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function TarifForm() {
  // Corps du mail pré-rempli (tu peux adapter)
  const mailtoLink =
    "mailto:contact@realtimes.fr" +
    "?subject=Demande%20d'information" +
    "&body=Bonjour,%0D%0A%0D%0A" +
    "Merci de remplir les informations ci-dessous :%0D%0A" +
    "Nom :%0D%0A" +
    "Prénom :%0D%0A" +
    "Email :%0D%0A" +
    "Entreprise :%0D%0A" +
    "Téléphone :%0D%0A" +
    "À partir de quand souhaitez-vous intégrer votre solution ?%0D%0A%0D%0A" +
    "Merci !";

  return (
    <section className="tarif-form">
      <motion.div
        className="tarif-form-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          variants={fadeInUpItem}
          id="tarif-form"
          className="tarif-form-card"
        >
          <div className="tarif-form-card-content">
            <p className="tarif-form-card-text">
              Merci de préparer votre mail avec les informations suivantes :
            </p>
            <ul className="tarif-form-card-fields">
              <li><strong>Nom :</strong> Votre nom</li>
              <li><strong>Prénom :</strong> Votre prénom</li>
              <li><strong>Email :</strong> Votre email</li>
              <li><strong>Entreprise :</strong> Nom de votre entreprise</li>
              <li><strong>Téléphone :</strong> Votre numéro</li>
              <li>
                <strong>À partir de quand souhaitez-vous intégrer notre
                solution ?</strong>
              </li>
            </ul>
            <a
              className="tarif-form-card-button"
              href={mailtoLink}
            >
              Envoyer un email
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}