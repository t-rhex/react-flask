import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#82f970",
          secondary: "#0e2472",
          accent: "#7dd358",
          neutral: "#20262c",
          "base-100": "#30395a",
          info: "#97b7f2",
          success: "#27dda7",
          warning: "#f18e1e",
          error: "#f05184",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
