import ClientsSlider from "../../components/ClientsSlider/ClientsSlider";
import TarifFormTemp from "./components/TarifForm/TarifFormTemp";
import TarifHero from "./components/TarifHero/TarifHero";
import FAQSection from "../../components/FAQSection/FAQSection";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import { clientLogos } from "../../data/clientsLogos";
import HeroBackgroundDataFlow from "../../components/HeroBackgroundDataFlow/HeroBackgroundDataFlow";


export default function TarifPage(){
    return(
        <section>
            <div className="page-background">
                <HeroBackgroundDataFlow />
                <div className="page-container">
                    <TarifHero />
                    <TarifFormTemp />
                </div>
                <ClientsSlider logos={clientLogos} />   
            </div>
            <img className="gray-bottom-shape" src="/images/gray-bottom-shape.svg" alt="gray-bottom-shape" />
            <FAQSection />
            <TestimonialSection />
        </section>
    )
}