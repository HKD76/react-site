import './AboutReliability.css';

export default function AboutReliability() {
    return (
        <section className="about-reliability">
            <div className="about-reliability-container">
                <div className="about-reliability-content">
                    <h2 className="about-reliability-title">
                        Une fiabilité inégalée
                    </h2>
                    <p className="about-reliability-text">
                        La RTBOX est composée d’un automate industriel qui permet au système de bénéficier d’une extraordinaire fiabilité ainsi qu’une durée de vie de plus de 15 ans aujourd’hui sans se préoccuper du suivi de la vie du produit.
                    </p>
                    <p className="about-reliability-text">
                        Pour le moment, les composants qui équipent la RTBOX ont encore une durée d’existence d’au moins 5 ans. La connectique de la RTBOX est elle aussi industrielle avec des connecteurs M12 permettant de connecter directement les principaux capteurs du marché.
                    </p>
                </div>
                <div className="about-reliability-image">
                    <img src="/images/suivi-production-realtimes-p-1080.webp" alt="Suivi de production" />
                </div>
            </div>
        </section>
    )
}