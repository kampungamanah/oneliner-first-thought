import { mkdirSync, writeFileSync } from "node:fs";

// The first word that comes to mind.
// The first word that surfaced: "petrichor", the smell of rain on dry earth.
// Writes the line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// No trailing newline: the gate counts every character.
const line = "petrichor";
for (const dir of [process.env.MAKEFUN_OUTPUT_DIR, "/output"]) {
  if (!dir) continue;
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(dir + "/entry.txt", line);
  } catch {}
}
