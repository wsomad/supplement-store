import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6F00', // Custom primary color
        secondary: '#10B981', // Custom secondary color
        background: '#F3F4F6', // Custom background color
        accent: '#9333EA', // Custom accent color
      },
      fontFamily: {
        sans: ['Poppins', 'Lato', 'sans-serif'],  
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
