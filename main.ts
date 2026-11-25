import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Liner Marathon — writes one one-line comedy joke to /output/entry.txt.
// Gate: entry.txt must be UTF-8 text of 1 to 280 characters.
// The joke is a single specific absurd image (Pak RT, plastic plants, 6 a.m.)
// with one twist, ending on a fact — no setup-punchline, no explanation.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line =
  "My neighbour Pak RT waters his plastic plants every morning at six, and yesterday he asked me why mine keep dying.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
