import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUpContainer, fadeInUpItem } from "../../animation/animation";
import "./FAQSection.css";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="faq-section">
      <motion.div
        className="faq-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeInUpItem} className="title">
          F.A.Q Les questions fréquentes
        </motion.h2>
        <div className="faq-content">
          <motion.div variants={fadeInUpItem} className="faq-card">
            <div
              className="faq-subcontent"
              onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
            >
              <div className="FAQ-subtext">
                <p className="FAQ-subtext-title">
                  Où est situé le siège de RealTiMES ?
                </p>
                <div
                  className={`FAQ-subtext-cross ${openIndex === 0 ? "open" : ""}`}
                >
                  <img src="/images/plus.svg" alt="cross" />
                </div>
              </div>
            </div>
            <div className={`FAQ-answers ${openIndex === 0 ? "open" : ""}`}>
              <div className="FAQ-answer">
                <p className="FAQ-answer-text">
                  RealTiMES est une société basée à Rouen en Normandie (Bihorel
                  76420) depuis plus de 15 ans
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeInUpItem} className="faq-card">
            <div
              className="faq-subcontent"
              onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
            >
              <div className="FAQ-subtext">
                <p className="FAQ-subtext-title">
                  Peut-on connecter RealTiMES à un automate pour récupérer des
                  informations ?
                </p>
                <div
                  className={`FAQ-subtext-cross ${openIndex === 1 ? "open" : ""}`}
                >
                  <img src="/images/plus.svg" alt="cross" />
                </div>
              </div>
            </div>
            <div className={`FAQ-answers ${openIndex === 1 ? "open" : ""}`}>
              <div className="FAQ-answer">
                <p className="FAQ-answer-text">
                  Oui , la solution RealTIMES intègre le protocole OPCUA et vous
                  pouvez aussi « échanger » des informations avec des Entrées /
                  Sorties (codage en BCD). N’hésitez pas à prendre contact avec
                  nous pour en discuter.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeInUpItem} className="faq-card">
            <div
              className="faq-subcontent"
              onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
            >
              <div className="FAQ-subtext">
                <p className="FAQ-subtext-title">
                  Peut-on échanger des informations avec notre ERP ?
                </p>
                <div
                  className={`FAQ-subtext-cross ${openIndex === 2 ? "open" : ""}`}
                >
                  <img src="/images/plus.svg" alt="cross" />
                </div>
              </div>
            </div>
            <div className={`FAQ-answers ${openIndex === 2 ? "open" : ""}`}>
              <div className="FAQ-answer">
                <p className="FAQ-answer-text">
                  Oui , l’échange des informations se fait simplement avec des
                  fichiers plats (type csv)
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeInUpItem} className="faq-card">
            <div
              className="faq-subcontent"
              onClick={() => setOpenIndex(openIndex === 3 ? null : 3)}
            >
              <div className="FAQ-subtext">
                <p className="FAQ-subtext-title">
                  Quel est le délai d'installation ?
                </p>
                <div
                  className={`FAQ-subtext-cross ${openIndex === 3 ? "open" : ""}`}
                >
                  <img src="/images/plus.svg" alt="cross" />
                </div>
              </div>
            </div>
            <div className={`FAQ-answers ${openIndex === 3 ? "open" : ""}`}>
              <div className="FAQ-answer">
                <p className="FAQ-answer-text">
                  Livraison des RTBOX, puis installation par leur soin, ensuite
                  installation sur un serveur de leur fourniture et quand cela
                  est en place on intervient et cela peut prendre 24 ou 48h.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeInUpItem} className="faq-card">
            <div
              className="faq-subcontent"
              onClick={() => setOpenIndex(openIndex === 4 ? null : 4)}
            >
              <div className="FAQ-subtext">
                <p className="FAQ-subtext-title">
                  Combien coûte la mise en place du système RealTiMES ?
                </p>
                <div
                  className={`FAQ-subtext-cross ${openIndex === 4 ? "open" : ""}`}
                >
                  <img src="/images/plus.svg" alt="cross" />
                </div>
              </div>
            </div>
            <div className={`FAQ-answers ${openIndex === 4 ? "open" : ""}`}>
              <div className="FAQ-answer">
                <p className="FAQ-answer-text">
                  La mise en place du système RealTiMES représente un
                  investissement d'environ 3 000€ avec un écran et une douchette
                  sans fil. Le coût est valable pour une ligne de production.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeInUpItem} className="faq-card">
            <div
              className="faq-subcontent"
              onClick={() => setOpenIndex(openIndex === 5 ? null : 5)}
            >
              <div className="FAQ-subtext">
                <p className="FAQ-subtext-title">
                  Existe-t-il un support client ?
                </p>
                <div
                  className={`FAQ-subtext-cross ${openIndex === 5 ? "open" : ""}`}
                >
                  <img src="/images/plus.svg" alt="cross" />
                </div>
              </div>
            </div>
            <div className={`FAQ-answers ${openIndex === 5 ? "open" : ""}`}>
              <div className="FAQ-answer">
                <p className="FAQ-answer-text">
                  Oui. La solution MES RealTiMES vous assure un support client
                  afin de vous apporter toutes les réponses à vos questions. Nos
                  techniciens se déplacent également dans votre usine afin de
                  régler les imprévus si nécessaire.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeInUpItem} className="faq-card">
            <div
              className="faq-subcontent"
              onClick={() => setOpenIndex(openIndex === 6 ? null : 6)}
            >
              <div className="FAQ-subtext">
                <p className="FAQ-subtext-title">
                  Quels résultats espérer suite à la mise en place de votre
                  système ?
                </p>
                <div
                  className={`FAQ-subtext-cross ${openIndex === 6 ? "open" : ""}`}
                >
                  <img src="/images/plus.svg" alt="cross" />
                </div>
              </div>
            </div>
            <div className={`FAQ-answers ${openIndex === 6 ? "open" : ""}`}>
              <div className="FAQ-answer">
                <p className="FAQ-answer-text">
                  Nous avons remarqué un gain de productivité de 5 à 30% chez
                  nos clients.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeInUpItem} className="faq-card">
            <div
              className="faq-subcontent"
              onClick={() => setOpenIndex(openIndex === 7 ? null : 7)}
            >
              <div className="FAQ-subtext">
                <p className="FAQ-subtext-title">
                  Quelles sont vos références ?
                </p>
                <div
                  className={`FAQ-subtext-cross ${openIndex === 7 ? "open" : ""}`}
                >
                  <img src="/images/plus.svg" alt="cross" />
                </div>
              </div>
            </div>
            <div className={`FAQ-answers ${openIndex === 7 ? "open" : ""}`}>
              <div className="FAQ-answer">
                <p className="FAQ-answer-text">
                  Nos clients sont des références internationales ou nationales
                  tels que : MSD, Panzani, Lactalis, Plastic Omnium, LDC, Knauf,
                  Laboratoire Ducastel...
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
