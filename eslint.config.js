import jsEslint from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";
import importJsPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import globals from "globals";

/**
 * Global Eslint configuration
 * @type {import("eslint").Linter.FlatConfig}
 */
const defaultConfig = {
  languageOptions: {
    globals: {
      ...globals.jest,
      ...globals.node,
    },
  },
  plugins: {
    import: importJsPlugin,
  },
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        alphabetize: { order: "asc" },
      },
    ],
  },
};

/**
 * Javascript Eslint configuration
 * @type {import("eslint").Linter.FlatConfig}
 */
const jsEslintConfig = jsEslint.configs.recommended;

/**
 * Typescript Eslint configuration
 * @type {import("eslint").Linter.FlatConfig}
 */
const tsEslintConfig = {
  files: ["**/*.ts", "**/*.tsx"],
  languageOptions: {
    parser: tsParser,
  },
  plugins: {
    "@typescript-eslint": tsPlugin,
  },
  rules: {
    ...tsPlugin.configs.recommended.rules,
    ...tsPlugin.configs.stylistic.rules,
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
  },
};

/**
 * Prettier Eslint configuration
 * @type {import("eslint").Linter.FlatConfig}
 */
const prettierEslintConfig = {
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    ...prettierConfig.rules,
    ...prettierPlugin.configs.recommended.rules,
    "prettier/prettier": "error",
  },
};

/**
 * Global ignores patterns
 * @type {import("eslint").Linter.FlatConfig}
 */
const globalIgnorePatternEslintConfig = {
  ignores: ["**/dist", "**/node_modules", "node_modules"],
};

/**
 * Eslint flat configuration monorepo
 * @type {import("eslint").Linter.FlatConfig[]}
 */
export default [
  defaultConfig,
  jsEslintConfig,
  tsEslintConfig,
  prettierEslintConfig,
  globalIgnorePatternEslintConfig,
];
