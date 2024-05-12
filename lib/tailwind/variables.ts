// Common Screen Sizes Config
export const screenSizes = {
  zero: "0px",
  xs: "400px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",

  // Device screens
  mobile: "640px",
  tablet: "768px",
  desktop: "1280px",

  // [lowTablet]: match Tablet / Ipads low resolution (481px -> 767px)
  lowTablet: "481px",

  // Components o-card-article
  cDesktop: "640px",
  cTablet: "540px",
} as const

export const extraKeyframes = {
  fadein: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  slideUpAndFade: {
    from: { opacity: 0, transform: "translateY(2px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
  slideRightAndFade: {
    from: { opacity: 0, transform: "translateX(-2px)" },
    to: { opacity: 1, transform: "translateX(0)" },
  },
  slideDownAndFade: {
    from: { opacity: 0, transform: "translateY(-2px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
  slideLeftAndFade: {
    from: { opacity: 0, transform: "translateX(2px)" },
    to: { opacity: 1, transform: "translateX(0)" },
  },
  loadingDot: {
    "0%": {
      transform: "translateY(0)",
    },
    "25%": {
      transform: "translateY(-100%)",
    },
    "50%": {
      transform: "translateY(16%)",
    },
    "60%": {
      transform: "translateY(-16%)",
    },
    "70%": {
      transform: "translateY(4%)",
    },
    "75%": {
      transform: "translateY(0px)",
    },
    "100%": {
      transform: "translateY(0px)",
    },
  },
  "slide-in": {
    from: { transform: "translateX(-10%)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
  },
  "slide-in-right": {
    from: { transform: "translateX(10%)" },
    to: { transform: "translateX(0)", opacity: 1 },
  },
  "slide-in-top": {
    from: { transform: "translate(0%)", opacity: 1 },
    to: { transform: "translateY(100%)", opacity: 1 },
  },
  "toast-slide-in-bottom": {
    "0%": { transform: `translateY(calc(100% + 1rem))` },
    "100%": { transform: "translateY(0)" },
  },
  live: {
    from: { opacity: 0.6, transform: "scale(.9)" },
    to: { opacity: 1, transform: "scale(1)" },
  },
  liveDot: {
    "0%": { transform: "scale(1)", boxShadow: "0px 0px 0px 2px #ef444433" },
    "35%": { transform: "scale(1.15)", boxShadow: "0px 0px 0px 6px #ef444400" },
    "50%": { boxShadow: "0px 0px 0px 6px #ef444400" },
    "100%": { transform: "scale(1)", boxShadow: "0px 0px 0px 2px #ef444433" },
  },
  spin: {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  popupBackgroundFadeIn: {
    from: {
      backgroundColor: "rgb(0 0 0 / 0.0)",
    },
    to: {
      backgroundColor: "rgb(0 0 0 / 0.8)",
    },
  },
  zoomUp: {
    from: { transform: "scale(0.8)", opacity: "0%" },
    to: { transform: "scale(1)", opacity: "100%" },
  },
  titleRotate: {
    "0%": {
      transform: "rotateX(0deg)",
    },
    "100%": {
      transform: "rotateX(360deg)",
    },
  },
  titleRotate2: {
    "0%": {
      transform: "rotateX(90deg) translateZ(27px)",
    },
    "100%": {
      transform: "rotateX(-90deg) translateZ(27px)",
      opacity: "100%",
    },
  },
} as const

export const extraAnimations = {
  fadein: "fadein 1s linear 1 forwards",
  loadingDot: "loadingDot .75s linear infinite",
  "slide-in-left": "slide-in 1s cubic-bezier(0.25, 0.8, 0.25, 1) 1 forwards",
  "slide-in-right": "slide-in-right 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards",
  "slide-in-top": "slide-in-top 2s cubic-bezier(0.25, 0.8, 0.25, 1) forwards",
  "toast-slide-in-bottom": "toast-slide-in-bottom 150ms cubic-bezier(0.16, 1, 0.3, 1)",
  live: "live 1s cubic-bezier(0, 0, 0.2, 1) infinite",
  liveDot: "liveDot 1.5s linear infinite",
  spin: "spin 100s linear infinite",
  zoomUp: "zoomUp 0.25s linear forwards",
  popupBackgroundFadeIn: "popupBackgroundFadeIn 0.2s linear forwards",
  slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
  slideRightAndFade: "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
  slideDownAndFade: "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
  slideLeftAndFade: "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
  titleRotate: "titleRotate 3s linear infinite",
  titleRotate2: "titleRotate2 3s linear infinite",
} as const
