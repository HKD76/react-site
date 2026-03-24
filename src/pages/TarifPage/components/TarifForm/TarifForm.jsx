import "./TarifForm.css";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";
import { trackEvent } from "../../../../analytics";

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
    e.preventDefault();

    try {
      const res = await fetch("/api/send-email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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

      trackEvent("Formulaire", "Envoi", "Tarif Form");
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
          <form
            className="tarif-form-card-content"
            action=""
            onSubmit={sendEmail}
          >
            <div className="tarif-form-card-field">
              <label className="tarif-form-card-label" htmlFor="nom">
                Nom
              </label>
              <input
                className="tarif-form-card-input"
                name="nom"
                type="text"
                placeholder="Nom"
                value={formData.nom}
                onChange={handleChange}
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
                value={formData.prenom}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.entreprise}
                onChange={handleChange}
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
                value={formData.num}
                onChange={handleChange}
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
                value={formData.texte}
                onChange={handleChange}
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
