const easeTransition = { duration: 0.5, ease: [0.76, 0, 0.24, 1] };

export const upAnimation = {
  initial: {
    top: 0,
  },
  animate: {
    top: "-100vh",
    transition: { ...easeTransition, delay: 0.2 },
  },
  exit: {
    opacity: 0,
  },
};

export const backgroundAnimation = {
  initial: {
    top: 0,
  },
  animate: {
    top: "-100vh",
    transition: { ...easeTransition, delay: 0.3 },
  },
  exit: {
    opacity: 0,
  },
};

export const showComponentsAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};

export const navAnimation = {
  initial: {
    transform: "translateY(-100%)",
    opacity: 0,
  },
  animate: {
    transform: "translateY(0%)",
    opacity: 1,
    transition: { ease: [0.76, 0, 0.24, 1], duration: 1, delay: 2.7 },
  },
};

export const landingAnimation = {
  initial: {
    transform: "translateY(100%)",
    opacity: 0,
  },
  animate: (delay: number) => ({
    transform: "translateY(0%)",
    opacity: 1,
    transition: { ease: [0.76, 0, 0.24, 1], duration: 0.5, delay: delay },
  }),
};
