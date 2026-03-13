import './AboutHero.css';

export default function AboutHero() {
    return (
        <section className="about-hero">
            <div className="about-container">
                <div className="about-square">
                    <div className="about-title">
                        <h2>La solution pour votre <span className="highlight">suivi de production industrielle</span> </h2>
                        <p>Tout savoir sur <span className="highlight">RealTiMES</span></p>
                    </div>
                </div>
                <div className="about-square">
                    <img
                        src="/images/a-propos-realtimes_2-p-800.webp"
                        alt="graphique gain productivité"
                    />
                </div>
                <div className="about-square">
                    <img
                        src="/images/amelioration-continue-production-p-800.webp"
                        alt="graphique gain productivité"
                    />
                </div>
                <div className="about-square">
                    <img
                        src="/images/code-barre-arrets-production-p-800.webp"
                        alt="graphique gain productivité"
                    />
                </div>
            </div>
            <p className="about-text">Nos clients sont des références internationales</p>
        </section>
    )
}