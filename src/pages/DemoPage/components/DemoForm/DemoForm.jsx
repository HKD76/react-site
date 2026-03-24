import "./DemoForm.css";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function DemoForm() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    entreprise: "",
    num: "",
    type: "Demande de démo",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

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
        type: "Demande de démo",
      });
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'envoi, réessaye");
    }
  };

  return (
    <section className="demo-form">
      <motion.div
        className="demo-form-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          variants={fadeInUpItem}
          id="demo-form"
          className="demo-form-card"
        >
          <form className="demo-form-card-content" onSubmit={sendEmail}>
            <div className="demo-form-card-field">
              <label htmlFor="nom">Nom</label>
              <input
                className="demo-form-card-input"
                name="nom"
                type="text"
                placeholder="Nom"
                value={formData.nom}
                onChange={handleChange}
              />
            </div>

            <div className="demo-form-card-field">
              <label htmlFor="prenom">Prénom</label>
              <input
                className="demo-form-card-input"
                name="prenom"
                type="text"
                placeholder="Prenom"
                value={formData.prenom}
                onChange={handleChange}
              />
            </div>

            <div className="demo-form-card-field">
              <label htmlFor="email">Email</label>
              <input
                className="demo-form-card-input"
                name="email"
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="demo-form-card-field">
              <label htmlFor="entreprise">Entreprise</label>
              <input
                className="demo-form-card-input"
                name="entreprise"
                type="text"
                placeholder="Entreprise"
                value={formData.entreprise}
                onChange={handleChange}
              />
            </div>

            <div className="demo-form-card-field full">
              <label htmlFor="num">Téléphone</label>
              <input
                className="demo-form-card-input"
                name="num"
                type="text"
                placeholder="Votre numéro"
                value={formData.num}
                onChange={handleChange}
              />
            </div>

            <input type="hidden" name="type" value={formData.type} />

            <button type="submit" className="demo-form-card-button">
              Envoyer
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
