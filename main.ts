// Invent a Word We Need — entry generator.
// Writes the single winning line to /output/entry.txt with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The coined word and its one-line definition, exactly as it will be judged.
const ENTRY_LINE =
  "pocketphantom — the buzz you feel in your pocket from a phone that isn't there.";

// Emit the entry file: create /output when missing, write UTF-8, no newline at end.
function emitEntry(): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY_LINE, { encoding: "utf8" });
}

emitEntry();

