/**
 * Arbre de conversation du chatbot.
 * Chaque nœud a un message bot + des choix utilisateur.
 * Un choix peut mener à un autre nœud (nextId) ou naviguer vers une page (path).
 */

const chatbotData = {
  welcome: {
    message:
      "Bonjour ! 👋 Je suis l'assistant RealTiMES, votre outil n°1 de suivi de production en temps réel. Comment puis-je vous aider ?",
    choices: [
      { label: "Découvrir RealTiMES", nextId: "solution" },
      { label: "Fonctionnalités", nextId: "features" },
      { label: "Indicateurs (TRS/KPI)", nextId: "kpis" },
      { label: "Le boîtier RTBOX", nextId: "rtbox" },
      { label: "Nos clients & résultats", nextId: "clients" },
      { label: "Tarifs & démo", nextId: "pricing" },
      { label: "Contacter l'équipe", path: "/contact" },
    ],
  },

  // ─── SOLUTION ──────────────────────────────────────────────
  solution: {
    message:
      "RealTiMES est un logiciel de suivi de production en temps réel fondé en 2006. Il mesure automatiquement le TRS (Taux de Rendement Synthétique) de vos lignes grâce au boîtier RTBOX. Plus de 50 sites industriels équipés, installation en 48h et un ROI en moins de 12 mois. Que souhaitez-vous explorer ?",
    choices: [
      { label: "Logiciel TRS", nextId: "solutionTRS" },
      { label: "Projet MES sur-mesure", nextId: "solutionMES" },
      { label: "Comment ça fonctionne ?", nextId: "howItWorks" },
      { label: "Intégration ERP/GMAO", nextId: "integration" },
      { label: "← Retour", nextId: "welcome" },
    ],
  },

  solutionTRS: {
    message:
      "Notre logiciel TRS est une solution non-intrusive qui capture les données de production en temps réel sans perturber vos opérations. Il calcule automatiquement le TRS en combinant Disponibilité × Performance × Qualité. Résultat : 5 à 30% de gain de productivité selon les sites.",
    choices: [
      { label: "Voir la page TRS", path: "/solution/logiciel-trs" },
      { label: "Comment ça fonctionne ?", nextId: "howItWorks" },
      { label: "Demander une démo", path: "/demander-une-demo" },
      { label: "← Retour", nextId: "solution" },
    ],
  },

  solutionMES: {
    message:
      "RealTiMES propose des projets MES sur-mesure en 4 étapes :\n\n1️⃣ Appel découverte avec nos consultants Lean\n2️⃣ Intégration sur vos lignes de production\n3️⃣ Accès illimité aux données et dashboards\n4️⃣ Gains de productivité et amélioration du TRS\n\nLe système intègre des fonctionnalités MRP, MES et PDP pour la planification avancée.",
    choices: [
      { label: "Voir votre projet MES", path: "/solution/votre-projet-mes" },
      { label: "Demander une démo", path: "/demander-une-demo" },
      { label: "← Retour", nextId: "solution" },
    ],
  },

  howItWorks: {
    message:
      "Le fonctionnement de RealTiMES en 5 étapes :\n\n1️⃣ Le RTBOX se connecte aux capteurs de vos machines et capture les données (cadences, comptages, états)\n2️⃣ En production normale, le TRS est calculé automatiquement\n3️⃣ En cas de micro-arrêt, le système l'enregistre sans intervention opérateur\n4️⃣ Pour un arrêt prolongé, l'opérateur déclare la cause via tablette ou scanner code-barres\n5️⃣ Les données s'affichent en temps réel sur vos écrans TV et dashboards\n\n⚠️ Si la cause d'arrêt n'est pas déclarée, le RTBOX bloque le redémarrage de la ligne.",
    choices: [
      { label: "Le boîtier RTBOX", nextId: "rtbox" },
      { label: "Les indicateurs suivis", nextId: "kpis" },
      { label: "Demander une démo", path: "/demander-une-demo" },
      { label: "← Retour", nextId: "solution" },
    ],
  },

  integration: {
    message:
      "RealTiMES s'intègre parfaitement à vos systèmes existants :\n\n🔗 ERP — via fichiers plats CSV\n🔗 Automates (PLC) — protocole OPC UA\n🔗 Échanges E/S — codage BCD\n🔗 GMAO — connexion bidirectionnelle\n🔗 Pointeuses — intégration via l'outil BI\n\nL'hébergement est on-premise, sur votre propre serveur.",
    choices: [
      { label: "Demander une démo", path: "/demander-une-demo" },
      { label: "Voir les tarifs", nextId: "pricing" },
      { label: "← Retour", nextId: "solution" },
    ],
  },

  // ─── FONCTIONNALITÉS ───────────────────────────────────────
  features: {
    message:
      "RealTiMES couvre l'ensemble du suivi de production industrielle. Quel domaine vous intéresse ?",
    choices: [
      { label: "Suivi de production", nextId: "featureSuivi" },
      { label: "Gestion des arrêts", nextId: "featureArrets" },
      { label: "Tableaux de bord & BI", nextId: "featureDashboard" },
      { label: "Contrôle qualité", nextId: "featureQualite" },
      { label: "Planification", nextId: "featurePlanification" },
      { label: "← Retour", nextId: "welcome" },
    ],
  },

  featureSuivi: {
    message:
      "📊 Suivi de production en temps réel :\n\n• Capture automatique des cadences et quantités via RTBOX\n• Calcul instantané du TRS sans saisie manuelle\n• Affichage sur écrans TV en atelier\n• Interface opérateur sur tablettes tactiles\n• Auto-contrôles fréquents sur les lignes\n• Détection automatique des micro-arrêts",
    choices: [
      { label: "Gestion des arrêts", nextId: "featureArrets" },
      { label: "Voir la page TRS", path: "/solution/logiciel-trs" },
      { label: "← Retour", nextId: "features" },
    ],
  },

  featureArrets: {
    message:
      "🔴 Gestion des arrêts machine :\n\n• Détection automatique de tous les arrêts\n• Micro-arrêts enregistrés sans intervention\n• Arrêts prolongés : déclaration obligatoire de la cause par l'opérateur (tablette WiFi ou scanner code-barres)\n• Catégorisation à partir de listes prédéfinies (pannes, changements de série, manques matière...)\n• Blocage du redémarrage tant que la cause n'est pas renseignée\n• Historique complet avec durées et fréquences",
    choices: [
      { label: "Les indicateurs suivis", nextId: "kpis" },
      { label: "Demander une démo", path: "/demander-une-demo" },
      { label: "← Retour", nextId: "features" },
    ],
  },

  featureDashboard: {
    message:
      "📈 Tableaux de bord & Business Intelligence :\n\n• Dashboards personnalisables en nombre illimité\n• Utilisateurs illimités\n• Outil BI intégré connecté à la base RealTiMES ou à vos bases externes (ERP, pointeuse...)\n• Rapports automatiques envoyés par email\n• Rapports de performance disponibles dès le lendemain\n• Export de données pour analyses complémentaires",
    choices: [
      { label: "Intégration ERP/GMAO", nextId: "integration" },
      { label: "Voir les tarifs", nextId: "pricing" },
      { label: "← Retour", nextId: "features" },
    ],
  },

  featureQualite: {
    message:
      "✅ Contrôle qualité en ligne :\n\n• Auto-contrôles opérateurs via tablettes tactiles\n• Catégorisation automatique des défauts\n• Suivi du taux de rebut en temps réel\n• Mesure du FPY (First Pass Yield) — % de produits conformes dès le premier passage\n• Traçabilité complète de la production\n• Indice qualité : ratio produits conformes / production totale",
    choices: [
      { label: "Les indicateurs qualité", nextId: "kpiQualite" },
      { label: "Demander une démo", path: "/demander-une-demo" },
      { label: "← Retour", nextId: "features" },
    ],
  },

  featurePlanification: {
    message:
      "📋 Planification & gestion de production :\n\n• Planification avancée MRP / MES / PDP\n• Ajustement en temps réel des ordres de fabrication\n• Gestion des stocks en temps réel\n• Suivi du taux de rotation des stocks\n• Visibilité sur la chaîne d'approvisionnement\n• Réduction des erreurs et accélération des cycles",
    choices: [
      { label: "Intégration ERP/GMAO", nextId: "integration" },
      { label: "Voir votre projet MES", path: "/solution/votre-projet-mes" },
      { label: "← Retour", nextId: "features" },
    ],
  },

  // ─── INDICATEURS / KPI ────────────────────────────────────
  kpis: {
    message:
      "RealTiMES suit les principaux indicateurs de performance industrielle. Lequel vous intéresse ?",
    choices: [
      { label: "TRS / OEE", nextId: "kpiTRS" },
      { label: "Disponibilité & arrêts", nextId: "kpiDispo" },
      { label: "Performance & cadence", nextId: "kpiPerformance" },
      { label: "Qualité & rebuts", nextId: "kpiQualite" },
      { label: "Autres indicateurs", nextId: "kpiAutres" },
      { label: "← Retour", nextId: "welcome" },
    ],
  },

  kpiTRS: {
    message:
      "📐 TRS (Taux de Rendement Synthétique) / OEE :\n\nC'est L'indicateur clé de la performance industrielle. Il mesure le temps réellement utilisé pour produire des pièces conformes.\n\n🔢 Formule : TRS = Disponibilité × Performance × Qualité\n\nÀ ne pas confondre avec :\n• TRG (Taux de Rendement Global) = Temps utile / Temps d'ouverture\n• Le TRS utilise le temps requis comme référence, le TRG utilise le temps d'ouverture\n\nChez nos clients : +15 points de TRS chez Aptar, +25% de productivité chez MSD.",
    choices: [
      { label: "Disponibilité", nextId: "kpiDispo" },
      { label: "Performance", nextId: "kpiPerformance" },
      { label: "Qualité", nextId: "kpiQualite" },
      { label: "Voir nos résultats clients", nextId: "resultats" },
      { label: "← Retour", nextId: "kpis" },
    ],
  },

  kpiDispo: {
    message:
      "⏱️ Disponibilité & Arrêts :\n\n🔢 Disponibilité = Temps de production / Temps de charge\n\nLes arrêts sont classés par catégories :\n• Pannes machines\n• Changements de série\n• Manques matière\n• Micro-arrêts (détectés automatiquement)\n• Arrêts planifiés (maintenance préventive)\n\nRealTiMES historise chaque arrêt avec sa durée et sa cause pour identifier les axes d'amélioration via analyse Pareto.",
    choices: [
      { label: "Performance & cadence", nextId: "kpiPerformance" },
      { label: "Gestion des arrêts", nextId: "featureArrets" },
      { label: "← Retour", nextId: "kpis" },
    ],
  },

  kpiPerformance: {
    message:
      "⚡ Performance & Cadence :\n\n🔢 Performance = Production réelle / Temps de production\n\n• Cadence : vitesse de production mesurée en pièces/heure ou unités/jour\n• Cible : objectif de production défini par la demande et la capacité\n• Takt Time : rythme de production nécessaire pour satisfaire la demande client\n• Temps de cycle : durée totale pour compléter un cycle de production\n\nRealTiMES calcule ces indicateurs automatiquement en continu.",
    choices: [
      { label: "Qualité & rebuts", nextId: "kpiQualite" },
      { label: "TRS / OEE", nextId: "kpiTRS" },
      { label: "← Retour", nextId: "kpis" },
    ],
  },

  kpiQualite: {
    message:
      "✅ Indicateurs Qualité :\n\n🔢 Qualité = Production bonne / Production totale\n\n• Indice Qualité : ratio de conformité aux standards prédéfinis\n• FPY (First Pass Yield) : % de produits conformes dès le premier passage, sans retouche\n• Taux de rebut : proportion de pièces défectueuses\n• Catégorisation automatique des défauts à partir de listes prédéfinies",
    choices: [
      { label: "Contrôle qualité en ligne", nextId: "featureQualite" },
      { label: "Disponibilité", nextId: "kpiDispo" },
      { label: "← Retour", nextId: "kpis" },
    ],
  },

  kpiAutres: {
    message:
      "📊 Autres indicateurs suivis :\n\n• Lead Time : durée du début de production à la livraison\n• WIP (Work In Progress) : quantité de produits en cours de fabrication\n• Taux de rotation des stocks : fréquence de renouvellement du stock\n• Takt Time : rythme de production aligné sur la demande client\n• Temps de cycle : durée totale d'un cycle complet",
    choices: [
      { label: "TRS / OEE", nextId: "kpiTRS" },
      { label: "Planification", nextId: "featurePlanification" },
      { label: "← Retour", nextId: "kpis" },
    ],
  },

  // ─── RTBOX ─────────────────────────────────────────────────
  rtbox: {
    message:
      "🔧 Le RTBOX est le boîtier industriel au cœur de RealTiMES :\n\n• Automate industriel (PLC) d'une fiabilité extraordinaire\n• Durée de vie : +15 ans sans maintenance\n• Connecteurs M12 industriels compatibles avec les principaux capteurs du marché\n• Disponibilité des composants garantie +5 ans\n• Installation en 24 à 48h\n\nSans RTBOX, la solution RealTiMES ne peut pas fonctionner — c'est lui qui collecte les données directement sur vos machines.",
    choices: [
      { label: "RTBOX Version 2", nextId: "rtboxV2" },
      { label: "Comment ça fonctionne ?", nextId: "howItWorks" },
      { label: "Voir les tarifs", nextId: "pricing" },
      { label: "← Retour", nextId: "welcome" },
    ],
  },

  rtboxV2: {
    message:
      "🆕 RTBOX Version 2 (en développement) :\n\n• Nouveau processeur avec écran tactile 5 pouces (option 10.1 pouces)\n• Entrées/sorties supplémentaires\n• 100% rétrocompatible avec la version 1\n• Fonctionnalités étendues tout en gardant l'intégration existante",
    choices: [
      { label: "Demander une démo", path: "/demander-une-demo" },
      { label: "Voir les tarifs", nextId: "pricing" },
      { label: "← Retour", nextId: "rtbox" },
    ],
  },

  // ─── CLIENTS & RÉSULTATS ───────────────────────────────────
  clients: {
    message:
      "RealTiMES accompagne des industriels de tous secteurs : pharma (MSD), agroalimentaire (Panzani, Lactalis, LDC), automobile (Plastic Omnium), matériaux (Knauf), packaging (Aptar), papeterie (Sodipan)... Que souhaitez-vous voir ?",
    choices: [
      { label: "Résultats chiffrés", nextId: "resultats" },
      { label: "Secteurs industriels", nextId: "secteurs" },
      { label: "Témoignages", path: "/clients/temoignages" },
      { label: "Études de cas", path: "/clients/cas-clients" },
      { label: "← Retour", nextId: "welcome" },
    ],
  },

  resultats: {
    message:
      "🏆 Résultats clients prouvés :\n\n📌 Aptar (packaging, 300 employés, 49 machines) :\n• +15 points de TRS\n• Gains organisationnels > gains techniques\n• \"RealTiMES nous a apporté un gain d'organisation beaucoup plus flagrant qu'en technique pure.\" — Marc Leriche\n\n📌 MSD Igoville (pharma) :\n• +25% de productivité en quelques semaines\n• \"Un gain de productivité de +25% quelques semaines après l'installation.\" — David Léguillon\n\n📌 Globalement : 5 à 30% de gains de productivité, ROI < 12 mois.",
    choices: [
      { label: "Voir les témoignages", path: "/clients/temoignages" },
      { label: "Voir les études de cas", path: "/clients/cas-clients" },
      { label: "Demander une démo", path: "/demander-une-demo" },
      { label: "← Retour", nextId: "clients" },
    ],
  },

  secteurs: {
    message:
      "🏭 Secteurs industriels couverts :\n\n• 💊 Pharmacie / Santé animale — MSD\n• 🧀 Agroalimentaire — Panzani, Lactalis, LDC Loué\n• 🥛 Produits laitiers — Fromagerie de Laqueuille\n• 🚗 Automobile / Plasturgie — Plastic Omnium\n• 🧱 Matériaux de construction — Knauf\n• 📦 Packaging / Cosmétique — Aptar\n• 📄 Papeterie — Sodipan\n\nNotre solution s'adapte à tout environnement industriel grâce à la connectique standard du RTBOX.",
    choices: [
      { label: "Résultats chiffrés", nextId: "resultats" },
      { label: "Études de cas", path: "/clients/cas-clients" },
      { label: "← Retour", nextId: "clients" },
    ],
  },

  // ─── TARIFS ────────────────────────────────────────────────
  pricing: {
    message:
      "💰 Tarification RealTiMES :\n\n• Licence de base : 3 000 € par ligne de production\n• Inclus : écran TV + scanner sans fil + RTBOX\n\n✅ Tout est illimité :\n— Utilisateurs illimités\n— Dashboards personnalisables illimités\n— Outil BI intégré\n— Rapports automatiques par email\n— Support client dédié\n— Hébergement on-premise (votre serveur)\n\n📅 Installation en 24 à 48h | ROI en moins de 12 mois",
    choices: [
      { label: "Voir la page tarifs", path: "/tarif" },
      { label: "Demander une démo", path: "/demander-une-demo" },
      { label: "Contacter l'équipe", path: "/contact" },
      { label: "← Retour", nextId: "welcome" },
    ],
  },
};

export default chatbotData;
