module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    indent: ["error", 2],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "prettier/prettier": ["error", { singleQuote: true, parser: "flow" }],
    "comma-dangle": ["error", "always-multiline"],
    "space-before-function-paren": ["error", "never"],
    "no-use-before-define": "off",
  },
};
