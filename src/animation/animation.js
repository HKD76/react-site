export const fadeInUpContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
export const fadeInUpItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const slideLeft = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 },
};