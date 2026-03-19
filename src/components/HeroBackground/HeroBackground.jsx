import { motion } from "framer-motion";

export default function HeroBackgroundDataFlow() {
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;

  const layers = [
    { count: 10, sizeRange: [4, 8], speedRange: [4, 6], opacityRange: [0.2, 0.4] },
    { count: 7, sizeRange: [6, 10], speedRange: [5, 8], opacityRange: [0.3, 0.5] },
    { count: 5, sizeRange: [8, 12], speedRange: [6, 10], opacityRange: [0.4, 0.6] },
  ];

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
      <motion.div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(62,194,102,0.15), transparent 70%)",
          top: -100,
          right: -100,
          filter: "blur(120px)",
        }}
        animate={{ y: [0, 40] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      {layers.map((layer, li) =>
        Array.from({ length: layer.count }).map((_, i) => {
          const size = Math.random() * (layer.sizeRange[1] - layer.sizeRange[0]) + layer.sizeRange[0];
          const opacity = Math.random() * (layer.opacityRange[1] - layer.opacityRange[0]) + layer.opacityRange[0];
          const duration = Math.random() * (layer.speedRange[1] - layer.speedRange[0]) + layer.speedRange[0];
          const delay = Math.random() * 2;
          const shadowBlur = Math.random() * 4 + 4;
          const shadowOpacity = Math.random() * 0.2 + 0.2;

          return (
            <motion.div
              key={`${li}-${i}`}
              style={{
                position: "absolute",
                width: size,
                height: size,
                borderRadius: "50%",
                backgroundColor: `rgba(62,194,102,${opacity})`,
                top: `${10 + Math.random() * 80}%`,
                left: -20,
                boxShadow: `0 0 ${shadowBlur}px rgba(62,194,102,${shadowOpacity})`,
              }}
              animate={{ x: [0, screenWidth + 40] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration,
                ease: "linear",
                delay,
              }}
            />
          );
        })
      )}
    </div>
  );
}