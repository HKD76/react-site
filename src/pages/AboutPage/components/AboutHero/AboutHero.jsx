import './AboutHero.css';

export default function AboutHero() {
    return (
        <section className="about-hero">
            <div className="about-hero-container">
                <div className="about-hero-square">
                    <div className="title">
                        <h2>La solution pour votre <span className="highlight">suivi de production industrielle</span> </h2>
                        <p className="page-subtitle">Tout savoir sur <span className="highlight">RealTiMES</span></p>
                    </div>
                </div>
                <div className="about-hero-square">
                    <img
                        src="/images/a-propos-realtimes_2-p-800.webp"
                        alt="graphique gain productivité"
                    />
                </div>
                <div className="about-hero-square">
                    <img
                        src="/images/amelioration-continue-production-p-800.webp"
                        alt="graphique gain productivité"
                    />
                </div>
                <div className="about-hero-square">
                    <img
                        src="/images/code-barre-arrets-production-p-800.webp"
                        alt="graphique gain productivité"
                    />
                </div>
            </div>
            <p className="about-hero-text">Nos clients sont des références internationales</p>
        </section>
    )
}