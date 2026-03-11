/**
 * Arbre de conversation du chatbot.
 * Chaque nœud a un message bot + des choix utilisateur.
 * Un choix peut mener à un autre nœud (nextId) ou naviguer vers une page (path).
 */

const chatbotData = {
  welcome: {
    message: "Bonjour ! 👋 Je suis l'assistant RealTiMES. Comment puis-je vous aider ?",
    choices: [
      { label: "Découvrir la solution", nextId: "solution" },
      { label: "Voir les fonctionnalités", nextId: "features" },
      { label: "Nos clients", nextId: "clients" },
      { label: "Demander une démo", path: "/demander-une-demo" },
      { label: "Contacter l'équipe", path: "/contact" },
    ],
  },

  solution: {
    message: "RealTiMES est un logiciel MES/TRS pour le pilotage industriel en temps réel. Que souhaitez-vous explorer ?",
    choices: [
      { label: "Logiciel TRS", path: "/solution/logiciel-trs" },
      { label: "Logiciel MES", path: "/solution/logiciel-mes" },
      { label: "Sur-mesure", path: "/solution/sur-mesure" },
      { label: "← Retour", nextId: "welcome" },
    ],
  },

  features: {
    message: "Nos fonctionnalités couvrent le suivi de production, la performance et l'analyse. Voici les détails :",
    choices: [
      { label: "Suivi de production", nextId: "featureDetail" },
      { label: "Indicateurs TRS/TRG", nextId: "featureDetail" },
      { label: "Tableaux de bord", nextId: "featureDetail" },
      { label: "← Retour", nextId: "welcome" },
    ],
  },

  featureDetail: {
    message: "Pour en savoir plus sur cette fonctionnalité, je vous invite à visiter notre page solution ou à demander une démonstration personnalisée.",
    choices: [
      { label: "Voir la solution TRS", path: "/solution/logiciel-trs" },
      { label: "Demander une démo", path: "/demander-une-demo" },
      { label: "← Retour", nextId: "features" },
    ],
  },

  clients: {
    message: "RealTiMES accompagne des industriels de tous secteurs. Découvrez leurs retours !",
    choices: [
      { label: "Témoignages", path: "/clients/temoignages" },
      { label: "Études de cas", path: "/clients/etudes-de-cas" },
      { label: "← Retour", nextId: "welcome" },
    ],
  },
};

export default chatbotData;
