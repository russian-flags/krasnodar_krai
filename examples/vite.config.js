import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const exampleDir = dirname(fileURLToPath(import.meta.url));
const packageRoot = resolve(exampleDir, "..");

export default {
  server: {
    fs: {
      allow: [packageRoot],
    },
  },
  build: {
    emptyOutDir: true,
  },
};
