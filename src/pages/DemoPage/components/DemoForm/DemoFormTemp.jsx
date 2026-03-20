import "./DemoFormTemp.css";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function DemoFormMailto() {
  const mailtoLink =
    "mailto:contact@realtimes.fr" +
    "?subject=Demande%20d'information" +
    "&body=Bonjour,%0D%0A%0D%0A" +
    "Merci de remplir les informations ci-dessous :%0D%0A" +
    "Nom :%0D%0A" +
    "Prénom :%0D%0A" +
    "Email :%0D%0A" +
    "Entreprise :%0D%0A" +
    "Téléphone :%0D%0A%0D%0A" +
    "Merci !";

  return (
    <section className="form-form">
      <motion.div
        className="demo-form-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          variants={fadeInUpItem}
          id="form-form"
          className="demo-form-card"
        >
          <div className="demo-form-card-content">
            <p className="demo-form-card-text">
              Merci de préparer votre mail avec les informations suivantes :
            </p>
            <ul className="demo-form-card-fields">
              <li>
                <strong>Nom :</strong> Votre nom
              </li>
              <li>
                <strong>Prénom :</strong> Votre prénom
              </li>
              <li>
                <strong>Email :</strong> Votre email
              </li>
              <li>
                <strong>Entreprise :</strong> Nom de votre entreprise
              </li>
              <li>
                <strong>Téléphone :</strong> Votre numéro
              </li>
            </ul>
            <a className="demo-form-card-button" href={mailtoLink}>
              Envoyer un email
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
