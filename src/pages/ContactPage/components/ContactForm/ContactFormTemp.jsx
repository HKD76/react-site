import "./ContactFormTemp.css";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function ContactFormMailto() {
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
    "Quel est votre message ?%0D%0A%0D%0A" +
    "Merci !";

  return (
    <section className="contact-form">
      <motion.div
        className="contact-form-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          variants={fadeInUpItem}
          id="contact-form"
          className="contact-form-card"
        >
          <div className="contact-form-card-content">
            <p className="contact-form-card-text">Merci de préparer votre mail avec les informations suivantes :</p>
            <ul className="contact-form-card-fields">
              <li><strong>Nom :</strong> Votre nom</li>
              <li><strong>Prénom :</strong> Votre prénom</li>
              <li><strong>Email :</strong> Votre email</li>
              <li><strong>Entreprise :</strong> Nom de votre entreprise</li>
              <li><strong>Téléphone :</strong> Votre numéro</li>
              <li><strong>Quel est votre message ?</strong></li>
            </ul>
            <a
              className="contact-form-card-button"
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