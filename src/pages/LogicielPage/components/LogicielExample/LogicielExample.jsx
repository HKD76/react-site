import "./LogicielExample.css";

export default function LogicielExample() {
  return (
    <section className="logiciel-example">
      <div className="logiciel-example-container">
        <h2 className="logiciel-example-title">
          Exemple de tableau de bord de suivi TRS
        </h2>
        <p className="logiciel-example-text">
          Le tableau de bord RealTiMES vous permet de visualiser en temps réel
          la disponibilité des machines, la performance, et la qualité de vos
          lignes de production. Cet affichage intuitif facilite l'identification
          des sources de perte et permet d’optimiser rapidement votre
          productivité.
        </p>
        <div className="logiciel-example-image">
          <img src="/images/Ecran_Loué.webp" alt="Ecran Loué" />
        </div>
      </div>
    </section>
  );
}
