import CallToActionSection from "../../components/CallToActionSection/CallToActionSection";
import EbookHero from "./components/EbookHero/EbookHero";

export default function EbookPage() {
    return (
        <section>
            <div className="page-background">
                <div className="page-container">
                    <EbookHero />
                </div>
            <CallToActionSection />
            </div>
        </section>
    );
}