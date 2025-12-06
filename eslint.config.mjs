import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  globalIgnores([
    "out/**",
    "build/**",
    "dist/**",
    "node_modules/**",
  ]),
]);

export default eslintConfig;
