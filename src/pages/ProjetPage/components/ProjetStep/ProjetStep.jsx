import TimeLine from "../TimeLine/TimeLine"
import "./ProjetStep.css"

export default function ProjetStep(){
    return (
        <section className="projet-step">
            <div className="projet-step-container">
                <h2 className="projet-step-title">Vous êtes à 48h de booster votre productivité jusqu'à 30%</h2>
                <p className="page-subtitle">Votre projet MES adapté pour votre usine de production</p>
                <div className="projet-step-content">
                    <TimeLine />
                </div>
            </div>
        </section>
    )
}