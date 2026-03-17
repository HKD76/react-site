import ClientsSlider from "../../components/ClientsSlider/ClientsSlider";
import TarifForm from "./components/TarifForm/TarifForm";
import TarifHero from "./components/TarifHero/TarifHero";
import { clientLogos } from "../../data/clientsLogos";


export default function TarifPage(){
    return(
        <section>
            <div className="page-background">
                <div className="page-container">
                    <TarifHero />
                    <TarifForm />
                </div>
                <ClientsSlider logos={clientLogos} />   
            </div>
            <img src="/images/gray-bottom-shape.svg" alt="gray-bottom-shape" />
        </section>
    )
}