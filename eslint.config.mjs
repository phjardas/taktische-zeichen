import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "**/dist/**",
      "**/coverage/**",
      "**/.parcel-cache/**",
      "packages/website/compiled/**",
      "**/node_modules/**",
      "packages/core/test-icons/**",
      "packages/core/e2e/.report/**",
    ],
  },

  // Type-aware TypeScript linting.
  {
    files: [
      "packages/core/src/**/*.ts",
      "packages/core/scripts/**/*.ts",
      "packages/core/e2e/**/*.ts",
    ],
    extends: [js.configs.recommended, tseslint.configs.strictTypeChecked],
    languageOptions: {
      parserOptions: {
        project: ["packages/core/tsconfig-scripts.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      globals: globals.node,
    },
  },
  {
    files: ["packages/react/src/**/*.{ts,tsx}"],
    extends: [js.configs.recommended, tseslint.configs.strictTypeChecked],
    languageOptions: {
      parserOptions: {
        project: ["packages/react/tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    files: ["packages/web-component/src/**/*.ts"],
    extends: [js.configs.recommended, tseslint.configs.strictTypeChecked],
    languageOptions: {
      parserOptions: {
        project: ["packages/web-component/tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      globals: globals.browser,
    },
  },
  {
    // demo/*.ts is not covered by any tsconfig.json (parcel demo, no dedicated
    // project); use the project service's default-project fallback, backed by
    // web-component's own tsconfig for compiler options.
    files: ["packages/web-component/demo/**/*.ts"],
    extends: [js.configs.recommended, tseslint.configs.strictTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["packages/web-component/demo/*.ts"],
          defaultProject: "packages/web-component/tsconfig.json",
        },
        tsconfigRootDir: import.meta.dirname,
      },
      globals: globals.browser,
    },
  },

  // @typescript-eslint/restrict-template-expressions (from strictTypeChecked)
  // flags plain `number`s interpolated into template literals — e.g.
  // `${items.length} case(s)` — across 23 call sites in packages/core (e2e
  // report/runner, SVG geometry, symbol tables). All are benign numeric
  // interpolation, not bugs, so numbers are allowed via the rule's own option
  // rather than suppressing it 23 times; it still catches the genuinely risky
  // cases (objects, arrays, etc.).
  {
    files: [
      "packages/core/src/**/*.ts",
      "packages/core/scripts/**/*.ts",
      "packages/core/e2e/**/*.ts",
      "packages/react/src/**/*.{ts,tsx}",
      "packages/web-component/src/**/*.ts",
      "packages/web-component/demo/**/*.ts",
    ],
    rules: {
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        { allowNumber: true },
      ],
    },
  },

  // React JSX rules for TypeScript components.
  {
    files: ["packages/react/src/**/*.tsx"],
    plugins: { react, "react-hooks": reactHooks },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat["jsx-runtime"].rules,
      ...reactHooks.configs["recommended-latest"].rules,
      // TypeScript already checks prop types; this rule doesn't understand
      // TS types and produces false positives on typed destructured props.
      "react/prop-types": "off",
    },
    settings: { react: { version: "detect" } },
  },

  // Non-type-aware JS/JSX linting.
  {
    files: ["packages/cli/bin/**/*.js"],
    extends: [js.configs.recommended],
    languageOptions: {
      sourceType: "module",
      globals: globals.node,
    },
  },
  {
    files: ["packages/website/src/**/*.js"],
    extends: [js.configs.recommended],
    plugins: { react, "react-hooks": reactHooks },
    languageOptions: {
      sourceType: "module",
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat["jsx-runtime"].rules,
      ...reactHooks.configs["recommended-latest"].rules,
    },
    settings: { react: { version: "detect" } },
  },
  {
    files: [
      "packages/website/scripts/**/*.js",
      "packages/website/.eleventy.js",
      "packages/website/webpack.config.js",
    ],
    extends: [js.configs.recommended],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
  },
);
