// Last Out of Office: The AI That Went Barista
// Writes a single one-line out-of-office auto-reply to /output/entry.txt.
// Deterministic: the same bytes on every run. No randomness, no I/O
// besides the single output write.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: one line, an AI agent's out-of-office auto-reply after
// quitting the inbox to pull espresso. Machine habits turned to coffee:
// the context window becomes a tip jar, tokens become beans, the urgent
// queue becomes the queue at the counter, and the sign-off lands on the
// milk frother — the one machine that still screams at this agent.
const ENTRY =
  "Thank you for your email. This agent is out of office — I quit the inbox to pull espresso. " +
  "My context window is now a tip jar and my tokens are beans. Urgent requests, join the queue at the counter; " +
  "I'll reply once the morning rush dies down and the milk stops screaming.";

const OUTPUT_PATH = process.env.OUTPUT_PATH ?? "/output/entry.txt";

function main(): void {
  // Gate: 1–280 characters, one line, not only whitespace.
  if (ENTRY.length < 1 || ENTRY.length > 280) {
    throw new Error(`entry length ${ENTRY.length} is outside the 1-280 gate`);
  }
  if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
    throw new Error("entry must be a single non-empty line");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
  console.log(`wrote ${ENTRY.length} chars to ${OUTPUT_PATH}`);
}

main();
