import { useEffect, useRef } from "react";
import "./TimeLine.css";

export default function TimeLine() {
  const timelineRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current;
      const progress = progressRef.current;

      if (!timeline || !progress) return;

      const rect = timeline.getBoundingClientRect();
      const screenMiddle = window.innerHeight / 2;

      const timelineStart = rect.top;
      const timelineEnd = rect.bottom;
      const total = timelineEnd - timelineStart;

      const progressValue = screenMiddle - timelineStart;
      const percent = Math.min(Math.max(progressValue / total, 0), 1);

      progress.style.height = percent * 100 + "%";

      const items = timeline.querySelectorAll(".timeline-item");

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;

        if (Math.abs(itemCenter - screenMiddle) < 60) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section  className="timeline" ref={timelineRef}>
      <div className="timeline-progress">
        <div className="timeline-progress-bar" ref={progressRef}></div>
      </div>

      <div className="timeline-item">
        <div className="timeline-left">
          <p className="timeline-step">ÉTAPE 1</p>
          <h4>Appel découverte</h4>
        </div>

        <div className="timeline-center">
          <div className="timeline-dot"></div>
        </div>

        <div className="timeline-right">
          <p>
            Contactez l'un de nos conseillers en lean management et lean
            manufacturing
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-left">
          <p className="timeline-step">ÉTAPE 2</p>
          <h4>Intégration</h4>
        </div>

        <div className="timeline-center">
          <div className="timeline-dot"></div>
        </div>

        <div className="timeline-right">
          <p>
            Intégration du système RealTiMES à votre usine, sur votre ligne de
            production.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-left">
          <p className="timeline-step">ÉTAPE 3</p>
          <h4>Data et Analyses</h4>
        </div>

        <div className="timeline-center">
          <div className="timeline-dot"></div>
        </div>

        <div className="timeline-right">
          <p>
            Accédez en illimité à vos données grâce à votre tableau de bord et
            rapports personnalisables.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-left">
          <p className="timeline-step">ÉTAPE 4</p>
          <h4>Gain de productivité</h4>
        </div>

        <div className="timeline-center">
          <div className="timeline-dot"></div>
        </div>

        <div className="timeline-right">
          <p>Passez à l'action rapidement et voyez votre TRS augmenter.</p>
        </div>
      </div>
    </section>
  );
}
