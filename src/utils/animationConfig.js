// Animation configuration and presets
export const animationConfig = {
  // Easing functions
  easing: {
    ease: [0.22, 1, 0.36, 1],
    spring: { type: "spring", stiffness: 400, damping: 17 },
    smooth: { type: "spring", stiffness: 300, damping: 20 },
  },

  // Duration presets
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.6,
  },

  // Common animation variants
  variants: {
    fadeInUp: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      },
    },

    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.5 },
      },
    },

    slideInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      },
    },

    slideInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      },
    },

    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      },
    },

    stagger: {
      visible: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
  },

  // Hover animations
  hover: {
    scale: { scale: 1.02 },
    lift: { scale: 1.03, y: -5 },
    button: { scale: 1.02 },
    card: { scale: 1.03, y: -5 },
  },

  // Tap animations
  tap: {
    scale: { scale: 0.98 },
    button: { scale: 0.98 },
  },
};

export default animationConfig;
