/** @type {import('eslint').Linter.Config} */
const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  extends: [
    "next/core-web-vitals",
    "prettier",
    "plugin:tailwindcss/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["tailwindcss", "prettier"],
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      plugins: ["@typescript-eslint"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
    tailwindcss: {
      callees: ["cn"],
      config: "tailwind.config.js",
    },
    next: {
      rootDir: true,
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
  // add rules configurations here
  rules: {
    semi: [2, "always"],
    "react/jsx-key": "off",
    "import/no-default-export": "off",
    "tailwindcss/classnames-order": "error",
    "@next/next/no-html-link-for-pages": "off",
  },
};
