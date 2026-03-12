# RealTiMES - Base de Connaissance

> Solution de suivi de production industrielle en temps réel, fondée en 2006 à Bihorel (Normandie, France).

## Sommaire

- [Présentation](#présentation)
- [Fonctionnalités principales](#fonctionnalités-principales)
- [Indicateurs de performance (KPI)](#indicateurs-de-performance-kpi)
- [RTBOX - Module matériel](#rtbox---module-matériel)
- [Fonctionnement technique](#fonctionnement-technique)
- [Cas d'usage et secteurs industriels](#cas-dusage-et-secteurs-industriels)
- [Résultats clients](#résultats-clients)
- [Tarification](#tarification)
- [Terminologie métier](#terminologie-métier)
- [Types d'utilisateurs](#types-dutilisateurs)
- [Processus industriels couverts](#processus-industriels-couverts)

---

## Présentation

RealTiMES est un logiciel de **suivi de production en temps réel** destiné aux industriels. Il permet de mesurer, analyser et améliorer la performance des lignes de production grâce au calcul automatique du **TRS (Taux de Rendement Synthétique)** et d'autres indicateurs clés.

**Chiffres clés :**
- **+50** systèmes RealTiMES installés
- **200%** de gains de productivité cumulés chez les clients
- **48h** de délai d'installation sur une ligne de production
- **5 à 30%** de gain de productivité selon les déploiements
- **ROI** en moins de 12 mois

**Contact :** contact@realtimes.fr | 02 55 42 02 89
**Adresse :** 10a rue du Maréchal de Lattre de Tassigny, 76420 Bihorel, France

---

## Fonctionnalités principales

### Suivi de production en temps réel
- Capture automatique des données de production via le boîtier RTBOX
- Calcul automatique du TRS sans intervention manuelle
- Détection automatique des micro-arrêts et arrêts prolongés
- Affichage temps réel sur écrans TV en atelier

### Gestion des arrêts machine
- Catégorisation automatique des défauts à partir de listes prédéfinies
- Déclaration des causes d'arrêt par scanner code-barres ou tablette WiFi
- Blocage de la ligne si la cause d'arrêt n'est pas renseignée (mécanisme d'enforcement)
- Historique complet des arrêts avec durées et causes

### Tableaux de bord et reporting
- Dashboards personnalisables en nombre illimité
- Nombre d'utilisateurs illimité
- Rapports automatiques envoyés par email à intervalles programmés
- Rapports de performance disponibles dès le lendemain
- Outil de BI intégré connecté à la base RealTiMES ou à des bases externes (ERP, pointeuse...)

### Planification avancée
- Fonctionnalités MRP, MES et PDP
- Ajustement en temps réel des ordres de fabrication
- Gestion des stocks en temps réel
- Visibilité sur la chaîne d'approvisionnement

### Intégration systèmes existants
- Connexion ERP, GMAO et MES
- Protocole OPC UA pour communication avec les automates
- Échanges entrées/sorties codés BCD
- Intégration par fichiers plats (CSV) avec les ERP

### Interface opérateur
- Tablettes tactiles pour auto-contrôles fréquents en ligne de production
- Scanner codes-barres / QR codes
- Interface simple et non-intrusive

---

## Indicateurs de performance (KPI)

### Indicateurs principaux

| Indicateur | Définition | Formule |
|---|---|---|
| **TRS** (Taux de Rendement Synthétique) | Mesure le temps réellement utilisé pour la production par rapport au temps total disponible | Disponibilité × Performance × Qualité |
| **Disponibilité** | Taux de fonctionnement effectif de l'équipement | Temps de production / Temps de charge |
| **Performance** | Efficacité de la vitesse de production | Production réelle / Temps de production |
| **Qualité** | Ratio de produits conformes | Production bonne / Production totale |
| **TRG** (Taux de Rendement Global) | Similaire au TRS mais divise le temps utile par le temps d'ouverture | Temps utile / Temps d'ouverture |
| **Cadence** | Vitesse de production mesurée en unités par période | Pièces/heure ou unités/jour |
| **Arrêts** | Interruptions de production (pannes, changements de série, manques matière) | Durée et fréquence |
| **Cible** | Objectif de production à atteindre sur une période donnée | Défini par la demande et la capacité |
| **Indice Qualité** | Ratio de produits conformes aux standards prédéfinis | Produits conformes / Production totale |

### Indicateurs complémentaires

| Indicateur | Définition |
|---|---|
| **OEE** (Overall Equipment Effectiveness) | Équivalent anglais du TRS |
| **FPY** (First Pass Yield) | % de produits conformes dès le premier passage, sans retouche |
| **Taux de rebut** | Proportion de pièces défectueuses |
| **Temps de cycle** | Durée totale d'un cycle de production |
| **Lead Time** | Durée du début de production à la livraison finale |
| **Takt Time** | Rythme de production nécessaire pour satisfaire la demande client |
| **WIP** (Work In Progress) | Quantité de produits en cours de fabrication |
| **Taux de rotation des stocks** | Nombre de fois que le stock est vendu et renouvelé sur une période |

---

## RTBOX - Module matériel

Le RTBOX est le boîtier industriel propriétaire au coeur du système RealTiMES.

### Caractéristiques
- **Type :** Automate industriel (PLC)
- **Durée de vie :** +15 ans sans maintenance
- **Connecteurs :** M12 industriels, compatibles avec les principaux capteurs du marché
- **Disponibilité des composants :** garantie +5 ans
- **Installation :** 24 à 48h après livraison

### RTBOX Version 2 (en développement)
- Nouveau processeur avec écran tactile 5 pouces (option 10.1 pouces)
- Entrées/sorties supplémentaires
- 100% rétrocompatible avec la version 1

### Rôle
Le RTBOX se connecte directement aux capteurs des machines pour capturer les données de production (cadences, arrêts, quantités). Sans RTBOX, la solution RealTiMES ne peut pas fonctionner.

---

## Fonctionnement technique

### Flux de données

1. **Capture** : Le RTBOX connecté aux capteurs machine collecte les données en temps réel (cadences, comptages, états machine)
2. **Traitement** : Calcul automatique du TRS et des indicateurs lorsque la machine tourne normalement
3. **Détection d'arrêt** :
   - **Micro-arrêt** : détecté et enregistré automatiquement, pas d'intervention opérateur si la machine redémarre rapidement
   - **Arrêt prolongé** : passage en statut "arrêt indéterminé", l'opérateur doit déclarer la cause (scanner ou tablette)
   - **Non-déclaration** : le RTBOX bloque le redémarrage de la ligne tant que la cause n'est pas renseignée
4. **Visualisation** : Affichage temps réel sur dashboards (écrans TV atelier, postes de travail, tablettes)
5. **Reporting** : Génération automatique de rapports, envoi par email programmé

### Hébergement
- **On-premise** : données hébergées sur le serveur du client
- Pas de cloud mentionné dans l'offre standard

---

## Cas d'usage et secteurs industriels

### Secteurs couverts

| Secteur | Clients référencés |
|---|---|
| **Pharmacie / Santé animale** | MSD |
| **Agroalimentaire** | Panzani, Lactalis, LDC Loué |
| **Produits laitiers** | Lactalis, Fromagerie de Laqueuille, coopératives laitières |
| **Automobile / Plasturgie** | Plastic Omnium |
| **Matériaux de construction** | Knauf (isolation thermique/acoustique) |
| **Packaging / Cosmétique** | Aptar (Personal Care) |
| **Papeterie** | Sodipan |

### Problématiques adressées
- Suivi de la productivité des lignes de production
- Identification et réduction des causes d'arrêt
- Traçabilité et qualité produit (notamment agroalimentaire et pharma)
- Optimisation des changements de série
- Amélioration continue (Lean Manufacturing)
- Coordination maintenance / production
- Gestion des stocks et flux de production

---

## Résultats clients

### Aptar (Personal Care) - Verneuil-sur-Avre
- **Contact :** Marc Leriche, Responsable Ingénierie & Maintenance
- **Effectif site :** ~300 employés | CA : 100M€
- **Déploiement :** 49 machines équipées (depuis 2007)
- **Résultats :**
  - **+15 points de TRS**
  - Gains organisationnels supérieurs aux gains techniques purs
  - Meilleure coordination maintenance-production
  - Réactivité et visibilité temps réel améliorées
- **Citation :** *"RealTiMES nous a apporté un gain d'organisation beaucoup plus flagrant qu'en technique pure."*

### MSD - Site d'Igoville
- **Contact :** David Léguillon, Directeur des Opérations
- **Résultats :**
  - **+25% de productivité** quelques semaines après l'installation
- **Citation :** *"Un gain de productivité de +25% quelques semaines après l'installation."*

---

## Tarification

### Offre unique
- **Licence de base :** 3 000 €
- Inclut **1 ligne de production** avec écran et scanner sans fil

### Inclus dans la licence
- Outil BI intégré
- Dashboards personnalisables
- Envoi automatique de rapports
- Utilisateurs illimités
- Module de capture RTBOX par machine
- Hébergement on-premise sur serveur client
- 1 écran TV pour affichage en ligne de production
- Support client dédié

---

## Terminologie métier

| Terme | Définition |
|---|---|
| **TRS** | Taux de Rendement Synthétique - indicateur principal mesurant l'efficacité globale d'un équipement |
| **TRG** | Taux de Rendement Global - variante du TRS utilisant le temps d'ouverture comme référence |
| **OEE** | Overall Equipment Effectiveness - équivalent anglais du TRS |
| **MES** | Manufacturing Execution System - système de pilotage de la production |
| **MRP** | Material Requirements Planning - planification des besoins en matières |
| **PDP** | Plan Directeur de Production |
| **GMAO** | Gestion de Maintenance Assistée par Ordinateur (CMMS en anglais) |
| **ERP** | Enterprise Resource Planning - progiciel de gestion intégré |
| **Lean Manufacturing** | Méthodologie d'optimisation de la production visant à réduire les gaspillages |
| **Amélioration continue** | Démarche systématique d'amélioration progressive des processus |
| **Temps de charge** | Temps total pendant lequel l'équipement est censé produire |
| **Temps utile** | Temps effectivement consacré à la production de pièces conformes |
| **Micro-arrêt** | Arrêt bref détecté automatiquement, sans intervention opérateur |
| **Arrêt indéterminé** | Arrêt dont la cause n'a pas encore été déclarée par l'opérateur |
| **Changement de série** | Temps de reconfiguration d'une machine entre deux productions différentes |
| **Industrie 4.0** | Quatrième révolution industrielle intégrant IoT, données temps réel et automatisation |
| **OPC UA** | Protocole de communication standard pour l'interconnexion des automates industriels |
| **BCD** | Binary-Coded Decimal - format d'échange entrées/sorties avec les automates |

---

## Types d'utilisateurs

| Rôle | Usage de RealTiMES |
|---|---|
| **Directeur des opérations** | Vision globale de la performance usine, pilotage stratégique, suivi du TRS |
| **Responsable de production** | Suivi quotidien des lignes, analyse des arrêts, optimisation des cadences |
| **Responsable maintenance** | Identification des pannes récurrentes, coordination avec la production |
| **Opérateur** | Déclaration des causes d'arrêt via tablette/scanner, auto-contrôles qualité |
| **Responsable qualité** | Suivi des taux de rebut, analyse FPY, traçabilité produit |
| **Direction générale** | Tableaux de bord synthétiques, suivi ROI, reporting automatisé |
| **Consultant Lean** | Analyse des données pour les démarches d'amélioration continue |

---

## Processus industriels couverts

### 1. Suivi de production temps réel
Monitoring continu des cadences, quantités produites et états machines avec affichage instantané sur dashboards.

### 2. Gestion des arrêts de production
Détection automatique, catégorisation obligatoire des causes, historisation et analyse des arrêts (pannes, changements de série, manques matière, etc.).

### 3. Calcul et suivi du TRS/OEE
Mesure automatique de la disponibilité, performance et qualité. Comparaison aux objectifs (cibles). Suivi de l'évolution dans le temps.

### 4. Contrôle qualité en ligne
Auto-contrôles opérateurs via tablettes tactiles, suivi du taux de rebut et du FPY, catégorisation automatique des défauts.

### 5. Planification de production
Gestion des ordres de fabrication, planification MRP/PDP, ajustement temps réel en fonction des aléas.

### 6. Gestion des stocks
Suivi des stocks en temps réel, calcul du taux de rotation, visibilité sur la supply chain.

### 7. Reporting et analyse
Rapports automatiques quotidiens, analyses BI personnalisées, export de données, benchmarking entre lignes/sites.

### 8. Amélioration continue
Identification des goulots d'étranglement, analyse Pareto des causes d'arrêt, suivi des plans d'action, mesure des gains post-amélioration.

---

*Ce document sert de base de connaissance pour l'assistance aux utilisateurs du logiciel RealTiMES. Il est généré à partir de l'analyse du site [realtimes.fr](https://www.realtimes.fr) en mars 2026.*
