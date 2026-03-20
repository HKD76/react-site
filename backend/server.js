require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());

// config email
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Erreur config SMTP :", error);
  } else {
    console.log("✅ Serveur prêt à envoyer des mails");
  }
});
// route API
app.post("/send-email", async (req, res) => {
  const { nom, prenom, email, entreprise, num, texte } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: "Nouveau message depuis le site",
      text: `
Nom: ${nom}
Prénom: ${prenom}
Email: ${email}
Entreprise: ${entreprise}
Téléphone: ${num}
Message: ${texte}
      `,
    });

    res.status(200).json({ message: "Email envoyé ✅" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur ❌" });
  }
});

app.listen(5000, () => {
  console.log("Serveur lancé sur http://localhost:5000");
});