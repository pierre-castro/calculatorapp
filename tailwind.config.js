/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "var(--bg-main)",
        keypadBg: "var(--bg-keypad)",
        screen: "var(--bg-screen)",
        delResetKeys: "var(--bg-delResetKeys)",
        delResetKeysShadow: "var(--delResetKeysShadow)",
        keys: "var(--bg-keys)",
        keyShadow: "var(--keyShadow)",
        equalsKey: "var(--equalsKey)",
        equalsKeyShadow: "var(--equalsKeyShadow)",
        textColor: "var(--textColor)",
        opKeyColor: "var(--opKeyColor)",
      },
      fontSize: {
        keySize: "clamp(1.5rem, 6vw, 2rem)",
      },
      boxShadow: {
        custom: "0px 2px 0px 0.5px",
        customInner: "inset 0px 2px 0px 0.4px",
      },
    },
  },
  plugins: [],
};
