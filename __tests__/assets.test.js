import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { settlementSlugs, settlements } from "../dist/meta.js";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

for (const settlement of settlements) {
  const sourcePath = join(root, "assets", settlement.slug, "index.svg");
  const builtPath = join(root, "dist", "flags", `${settlement.slug}.svg`);
  const info = await stat(sourcePath);
  const svg = await readFile(sourcePath, "utf8");
  const builtSvg = await readFile(builtPath, "utf8");

  assert.ok(info.isFile(), `${settlement.slug} asset should be a file`);
  assert.ok(info.size > 0, `${settlement.slug} asset should not be empty`);
  assert.match(svg, /<svg[\s>]/i, `${settlement.slug} asset should contain an SVG root`);
  assert.match(svg, /xmlns="http:\/\/www\.w3\.org\/2000\/svg"/i, `${settlement.slug} asset should be standalone`);
  assert.match(svg, /viewBox="[^"]+"/i, `${settlement.slug} asset should be scalable`);
  assert.equal(builtSvg, svg, `${settlement.slug} built flag should match its source asset`);
}

assert.equal(settlementSlugs.length, settlements.length);
