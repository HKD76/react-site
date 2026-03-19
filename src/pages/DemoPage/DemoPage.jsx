import CallToActionSection from "../../components/CallToActionSection/CallToActionSection";
import CardsSlider from "../../components/CardsSlider/CardsSlider";
import FAQSection from "../../components/FAQSection/FAQSection";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import DataSection from "../Home/components/DataSection/DataSection";
import InstallationSection from "../Home/components/InstallationSection/InstallationSection";
import QualitySection from "../Home/components/QualitySection/QualitySection";
import SupportSection from "../Home/components/SupportSection/SupportSection";
import ClientsSlider from "../../components/ClientsSlider/ClientsSlider";
import DemoHero from "./components/DemoHero/DemoHero";
import DemoForm from "./components/DemoForm/DemoForm";
import cards from "../../data/cards";
import { motion } from "framer-motion";
import { fadeInUpContainer, fadeInUpItem } from "../../animation/animation";
import { clientLogos } from "../../data/clientsLogos";

export default function DemoPage() {
  return (
    <section>
      <motion.div
        className="page-background"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="page-container">
          <DemoHero />
          <DemoForm />
        </div>
        <motion.p variants={fadeInUpItem} className="page-subtitle">
          Nos clients sont des références internationales
        </motion.p>
        <ClientsSlider logos={clientLogos} />
      </motion.div>
      <img src="/images/gray-bottom-shape.svg" alt="Gray Shape" />
      <motion.div
        className="page-container"
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeInUpItem} className="page-title">
          <span className="highlight">Un pilotage</span> de performance
          simplifié
        </motion.h2>
        <motion.p variants={fadeInUpItem} className="page-subtitle">
          Entrez dans l'ère de l'industrie 4.0
        </motion.p>
        <CardsSlider cards={cards} />
        <DataSection />
        <InstallationSection />
        <QualitySection />
        <SupportSection />
      </motion.div>
      <TestimonialSection />
      <div className="page-container">
        <FAQSection />
      </div>
      <CallToActionSection />
    </section>
  );
}
