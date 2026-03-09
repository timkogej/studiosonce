import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          primary: "#D4A574",
          light: "#E8C9A8",
          dark: "#C49660",
        },
        cream: {
          DEFAULT: "#F8F5F0",
          dark: "#EDE8E0",
        },
        sage: {
          DEFAULT: "#8BA888",
          light: "#A8C4A6",
        },
        charcoal: "#2D2D2D",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        accent: ["var(--font-cormorant)", "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4A574 0%, #C49660 100%)",
        "gold-gradient-light": "linear-gradient(135deg, #E8C9A8 0%, #D4A574 100%)",
      },
      animation: {
        shimmer: "shimmer 2s infinite",
        float: "float 3s ease-in-out infinite",
        "scroll-bounce": "scrollBounce 2s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scrollBounce: {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(8px)", opacity: "0.5" },
        },
      },
      boxShadow: {
        gold: "0 10px 40px -10px rgba(212, 165, 116, 0.4)",
        "gold-lg": "0 25px 50px -12px rgba(212, 165, 116, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
