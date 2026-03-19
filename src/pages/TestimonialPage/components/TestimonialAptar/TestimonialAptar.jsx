import "./TestimonialAptar.css";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../animation/animation";

export default function TestimonialAptar() {
  const [open, setOpen] = useState(false);
  return (
    <section className="testimonial-aptar">
      <motion.div
        className="testimonial-aptar-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="testimonial-aptar-content">
          <motion.h2
            variants={fadeInUpItem}
            className="testimonial-aptar-title"
          >
            Témoignage Aptar
          </motion.h2>
          <motion.p variants={fadeInUpItem} className="testimonial-aptar-text">
            Spécialisée dans la conception et la fabrication de systèmes de
            distribution pour conditionnement de produits cosmétiques, Aptar
            emploie quelque 300 personnes sur son site de Verneuil sur Avre. Un
            site qui réunit trois entités et trois secteurs d’activité
            différents :
          </motion.p>
          <ul>
            <motion.li
              variants={fadeInUpItem}
              className="testimonial-aptar-text"
            >
              Personnal Care (mass market),
            </motion.li>
            <motion.li
              variants={fadeInUpItem}
              className="testimonial-aptar-text"
            >
              Gift and promotion (échantillons et produits de promotion),
            </motion.li>
            <motion.li
              variants={fadeInUpItem}
              className="testimonial-aptar-text"
            >
              Airlessystems (cosmétique de luxe).
            </motion.li>
          </ul>
          <motion.p variants={fadeInUpItem} className="testimonial-aptar-text">
            <span className="highlight">Aptar</span> réalise un chiffre
            d’affaires de 100M€ par an.{" "}
            <span className="highlight"> Realtimes </span>
            équipe 49 machines sur l’entité « Personnal Care » pour piloter la
            performance.
          </motion.p>
        </div>
        <motion.div variants={fadeInUpItem} className="testimonial-aptar-image">
          <img src="/images/LogoAptarPharma_1.webp" alt="Logo Aptar" />
        </motion.div>
      </motion.div>
      <div
        className="testimonial-aptar-subcontent"
        onClick={() => setOpen(!open)}
      >
        <div className="testimonial-subtext">
          <p className="testimonial-subtext-title">Interview avec Aptar</p>
          <div className={`testimonial-subtext-cross ${open ? "open" : ""}`}>
            <img src="/images/plus.svg" alt="cross" />
          </div>
        </div>
      </div>

      <div className={`testimonial-aptar-interview ${open ? "open" : ""}`}>
        <p className="testimonial-aptar-interview-title">
          Pourquoi choisir Realtimes pour piloter la performance ?
        </p>
        <p className="testimonial-aptar-interview-author">
          <span className="highlight">Marc Leriche</span>, responsable
          engineering et maintenance
        </p>
        <p className="testimonial-aptar-interview-text">
          « Cela remonte à 2007, j’étais responsable maintenance chez{" "}
          <span className="highlight">Personnal Care</span> et chaque jours,
          j’entendais que des choses ne fonctionnaient pas. C’était
          particulièrement frustrant car je savais par ailleurs qu’il y avait
          des soucis d’organisation sur les machines mais je ne parvenais pas à
          les identifier et à les quantifier. Ceci dit, il est toujours plus
          facile de dire qu’une machine ne fonctionne pas plutôt que de chercher
          les causes du dysfonctionnement. J’avais donc un besoin essentiel :
          identifier les problèmes. J’ai rencontré{" "}
          <span className="highlight">Jean-Marc Sigaudy</span> qui m’a proposé{" "}
          <span className="highlight">Realtimes</span> et sur le papier, la
          solution était trouvée. Nous allions avoir les moyens d’identifier les
          causes des problèmes qu’ils soient humains ou techniques et surtout,
          de pouvoir faire le rapport problème – coût induit. Nous avions besoin
          d’un système simple à utiliser, réactif et flexible.{" "}
          <span className="highlight">Realtimes</span> répond à l’ensemble de
          ces critères ».
        </p>
        <p className="testimonial-aptar-interview-subtitle">
          « Realtimes est un outil d’amélioration continue »
        </p>
        <p className="testimonial-aptar-interview-text">
          « Souvent, dans les entreprises il n’y a pas de connexion entre la
          maintenance et la production.{" "}
          <span className="highlight">Realtimes</span> a permis de combler ce
          vide grâce à un tableau de bord qui nous permet de suivre l’ensemble
          de notre parc machines en temps réel.
        </p>
        <p className="testimonial-aptar-interview-text">
          De plus, les tableaux de bord sont évolutifs en fonction de nos
          besoins. <span className="highlight">RealTimes</span> est en mesure de
          les faire évoluer à la demande. L’arrivée de{" "}
          <span className="highlight">Realtimes</span> a été plutôt bien perçue
          sur les unités de production. Évidemment, un système comme celui-là ne
          sert à quelque chose que si tout le monde s’implique. Nous avons gagné
          en réactivité et cela nous a amenés à revoir notre management en
          installant notamment des écrans dans l’atelier qui permettent à chacun
          de voir ce qui se passe. Nous montrons tout, ce qui ne va pas et bien
          sûr, ce qui va bien.{" "}
        </p>
        <p className="testimonial-aptar-interview-text">
          L’avantage de <span className="highlight">Realtimes</span>, c’est
          qu’il donne toujours une explication précise au problème rencontré et
          que le problème en question ne peut faire l’objet d’aucune
          interprétation. Il permet également de savoir quelle production passe
          mal sur les machines et de fait, d’anticiper sur les mesures à prendre
          pour limiter en limiter les effets néfastes. Si je devais résumer, je
          dirais que <span className="highlight">Realtimes</span> nous a apporté
          un gain d’organisation beaucoup plus flagrant qu’en technique pure.
          Notre taux de rentabilité synthétique (TRS) a en effet progressé de 15
          points. Je le qualifie d’outil d’amélioration continue ».{" "}
        </p>
      </div>
    </section>
  );
}
