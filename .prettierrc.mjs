/** @type {import("prettier").Config} */
export default {
  arrowParens: "avoid",
  semi: true,
  proseWrap: "always",
  tabWidth: 2,
  printWidth: 80,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  endOfLine: "lf",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/styles/global.css",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: "*.md",
      options: {
        parser: "markdown",
        printWidth: 80,
        proseWrap: "always",
      },
    },
  ],
};
