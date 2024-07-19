import eslint from "@eslint/js";
import { eslintFlat as linkpiEslintFlat } from "@linkpi/lint";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  linkpiEslintFlat,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  {
    ignores: ['**/dist']
  }
);
