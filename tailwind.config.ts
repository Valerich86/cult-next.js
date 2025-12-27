import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0d0d0d",
        secondary: "#bdbfbf",
        brown: "#402319",
        peachy1: "#d9b29c",
        peachy2: "#8c5e4d",
        black: "#030303",
      },
      spacing: {
        offsetY: "70px",
        offsetX: "10%",
      },
      filter: {
        'none': 'none',
        'blur': 'blur(4px)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
      },
      keyframes: {
        iconTopHover: {
          "0%": {
            transform: "scaleY(1) translateY(0)",
          },
          "20%": {
            transform: "scaleY(1.5) translateY(-3px)",
          },
          "50%": {
            transform: "scaleY(1) translateY(0)",
          },
          "100%": {
            transform: "scaleY(2) translateY(-4px)",
          },
        },
        spinOnce: {
          to: {
            transform: "rotate(540deg)",
          },
        },
        rightsCapture: {
          "0%": {
            opacity: 0
          },
          "50%": {
            opacity: 0
          },
          "100%": {
            opacity: 1,
          },
        },
        bgImageSlide: {
          "0%": {
            backgroundPosition: "right",
          },
          "100%": {
            backgroundPosition: "left",
          },
        },
        logoShiningBG: {
          "0%": {
            backgroundColor: "black",
            opacity: 1,
          },
          "50%": {
            backgroundColor: "black",
          },
          "100%": {
            opacity: 0.70,
          },
        },
        logoShiningFG: {
          "0%": {
            opacity: 0,
            transform: "scale(1.3)",
            filter:
              "blur(0) brightness(0) drop-shadow(0 0 0px rgba(255, 255, 255, 0))",
          },
          "20%": {
            opacity: 0,
            transform: "scale(1.25)",
          },
          "30%": {
            opacity: 1,
            filter:
              "blur(5px) brightness(5) drop-shadow(0 0 40px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 60px rgba(100, 200, 255, 0.5))",
            transform: "scale(1.2)",
          },
          "100%": {
            opacity: 0.05,
            filter:
              "blur(2px) brightness(1) drop-shadow(0 0 10px rgba(255, 255, 255, 0.4))",
            transform: "scale(1.0)",
          },
        }
      },
      animation: {
        iconTopHover: "iconTopHover 1s",
        spinOnce: "spinOnce 0.7s ease-in-out",
        bgImageSlide: "bgImageSlide 120s linear infinite",
        logoShiningBG: "logoShiningBG 10s ",
        logoShiningFG: "logoShiningFG 10s ease-out forwards",
        rightsCapture: "rightsCapture 5s",
        alternativeBG: "logoShiningBG 1s ",
      },
    },
    variants: {
      extend: {
        filter: ['hover', 'focus'],
        backdropFilter: ['hover', 'focus']
      }
    },
  },
  plugins: [],
};

export default config;
