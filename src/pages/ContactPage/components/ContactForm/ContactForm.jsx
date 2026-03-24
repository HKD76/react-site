import "./ContactForm.css";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function TarifForm() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    entreprise: "",
    num: "",
    texte: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault(); // bloque le refresh du formulaire

    try {
      const res = await fetch("/api/send-email.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const contentType = res.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        const rawResponse = await res.text();
        throw new Error(
          `Réponse API invalide (attendu JSON). Aperçu: ${rawResponse.slice(0, 120)}`,
        );
      }

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message || "Erreur API");
      }
      alert(result.message);

      setFormData({
        nom: "",
        prenom: "",
        email: "",
        entreprise: "",
        num: "",
        texte: "",
      }); // reset
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'envoi, réessaye");
    }
  };

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
          <form className="contact-form-card-content" onSubmit={sendEmail}>
            <div className="contact-form-card-field">
              <label htmlFor="nom">Nom</label>
              <input
                className="contact-form-card-input"
                name="nom"
                type="text"
                placeholder="Nom"
                value={formData.nom}
                onChange={handleChange}
              />
            </div>
            <div className="contact-form-card-field">
              <label htmlFor="prenom">Prénom</label>
              <input
                className="contact-form-card-input"
                name="prenom"
                type="text"
                placeholder="Prenom"
                value={formData.prenom}
                onChange={handleChange}
              />
            </div>
            <div className="contact-form-card-field">
              <label htmlFor="email">Email</label>
              <input
                className="contact-form-card-input"
                name="email"
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="contact-form-card-field">
              <label htmlFor="entreprise">Entreprise</label>
              <input
                className="contact-form-card-input"
                name="entreprise"
                type="text"
                placeholder="Entreprise"
                value={formData.entreprise}
                onChange={handleChange}
              />
            </div>
            <div className="contact-form-card-field full">
              <label htmlFor="num">Téléphone</label>
              <input
                className="contact-form-card-input"
                name="num"
                type="text"
                placeholder="Votre numéro"
                value={formData.num}
                onChange={handleChange}
              />
            </div>
            <div className="contact-form-card-field full">
              <label htmlFor="texte">Quel est votre message ?</label>
              <textarea
                className="contact-form-card-input"
                name="texte"
                value={formData.texte}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="contact-form-card-button">
              Envoyer
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
