module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb-typescript",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-props-no-spreading": "off",
    "consistent-return": "off",
    // "@typescript-eslint/explicit-function-return-type": ["warn"],
    "func-names": ["warn", "always", { generators: "never" }],
    "import/prefer-default-export": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/interactive-supports-focus": "off",
  },
};
