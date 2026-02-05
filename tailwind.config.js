/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 중요: class 기반 다크모드
  content: [
    "./apps/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 팔레트 (직접 지정)

        white: "#ffffff",
        green100: "#90ee90",
        gray1: "#7575753A",
        gray100: "#818181",

        mainText: "var(--text-color)",
        pointText: "var(--text-point-color)",
        pointHoverText: "var(--text-point-hover-color)",
        mainBg: "var(--bg-color)",
        subBg: "var(--bg-sub-color)",
        subHoverBg: "var(--bg-sub-hover-color)",
      },
      gridTemplateColumns: {
        card1to4: "var(--flex-card-repeat)",
      },
    },
  },
};
