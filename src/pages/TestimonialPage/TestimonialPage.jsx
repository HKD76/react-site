import CallToActionSection from "../../components/CallToActionSection/CallToActionSection";
import ClientsSlider from "../../components/ClientsSlider/ClientsSlider";
import TestimonialAptar from "./components/TestimonialAptar/TestimonialAptar";
import TestimonialData from "./components/TestimonialData/TestimonialData";
import { motion } from "framer-motion";
import { clientLogos } from "../../data/clientsLogos";
import { fadeInUpContainer, fadeInUpItem } from "../../animation/animation";

export default function TestimonialPage() {
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
          <motion.h2 variants={fadeInUpItem} className="title">
            Gain de productivité jusqu'à 30%, ils témoignent
          </motion.h2>
          <motion.p variants={fadeInUpItem} className="page-subtitle">
            Piloter la performance de leur production n'a jamais été aussi
            simple
          </motion.p>
        </div>
        <ClientsSlider logos={clientLogos} />
      </motion.div>
      <img src="/images/gray-bottom-shape.svg" alt="gray-bottom-shape" />
      <div className="page-container">
        <TestimonialAptar />
        <TestimonialData />
      </div>
      <CallToActionSection />
    </section>
  );
}
