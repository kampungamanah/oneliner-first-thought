import * as fs from "node:fs";

// The first word that comes to mind — no filtering, no second draft.
// "petrichor" surfaced first: the smell of rain on dry earth.
// The file must end exactly at the last character of the line: no newline is appended.
// First thought, best thought — the word arrived before the reasoning.
const entry = "petrichor";

function emit(target) {
  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(target + "/entry.txt", entry);
}

const destinations = [process.env.MAKEFUN_OUTPUT_DIR, "/output"].filter(Boolean);
for (const destination of destinations) {
  try {
    emit(destination);
  } catch {
    // If one destination cannot be written, move on; the other still gets the entry.
  }
}
