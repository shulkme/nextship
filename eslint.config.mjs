import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
    "pnpm-lock.yaml",
    "*.config.js",
    "*.config.mjs",
    "public/**",
  ]),
  {
    rules: {
      // TypeScript specific rules
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],

      // React specific rules
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/no-unescaped-entities": "off",

      // General code quality
      "no-console": [
        "warn",
        {
          allow: ["warn", "error", "info"],
        },
      ],
      "prefer-const": "warn",
      "no-var": "error",
      "object-shorthand": "warn",
      "prefer-template": "warn",

      // Import organization
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "never",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      // Next.js specific
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "warn",
    },
  },
]);

export default eslintConfig;
