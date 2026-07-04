// Completes the standalone build so `.next/standalone/server.js` is fully
// self-contained (Hostinger Node.js Apps runs that file as the entry point).
// `next build` with output:"standalone" does not copy static assets or the
// public folder into the standalone tree by design — this does.
import { cpSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const standalone = join(root, ".next", "standalone");

if (!existsSync(standalone)) {
  console.error("postbuild: .next/standalone not found — did next build run?");
  process.exit(1);
}

cpSync(join(root, ".next", "static"), join(standalone, ".next", "static"), {
  recursive: true,
});
cpSync(join(root, "public"), join(standalone, "public"), { recursive: true });

console.log("postbuild: copied .next/static and public into .next/standalone");
