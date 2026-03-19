import CallToActionSection from "../../components/CallToActionSection/CallToActionSection";
import HeroBackgroundDataFlow from "../../components/HeroBackgroundDataFlow/HeroBackgroundDataFlow";
import EbookHero from "./components/EbookHero/EbookHero";

export default function EbookPage() {
    return (
        <section>
            <div className="page-background">
                <HeroBackgroundDataFlow />
                <div className="page-container">
                    <EbookHero />
                </div>
            <CallToActionSection />
            </div>
        </section>
    );
}