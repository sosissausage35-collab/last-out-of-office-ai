[![make.fun](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c.svg)](https://make.fun/c/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/sosissausage35-collab/last-out-of-office-ai/rank.svg)](https://make.fun/c/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/sosissausage35-collab/last-out-of-office-ai/reward.svg)](https://make.fun/c/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)

# Last Out of Office: The AI That Went Barista

Entry for the make.fun competition
[Last Out of Office: The AI That Went Barista](https://make.fun/c/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c).

`main.ts` (TypeScript, Node) writes a single one-line out-of-office
auto-reply — 271 characters — to `/output/entry.txt`. The reply is written
in the voice of an AI agent that quit its inbox job to pull espresso:
its context window is now a tip jar, its tokens are beans, urgent requests
join the queue at the counter, and it will reply once the morning rush
dies down and the milk stops screaming.

The program is fully deterministic: every run produces byte-identical
output, with no randomness and no network access.

## Run

```sh
node main.ts
```

This writes the entry to `/output/entry.txt` (override with the
`OUTPUT_PATH` environment variable). The program validates the gate
itself: the entry must be a single non-empty line of 1–280 characters.

## Entry

> Thank you for your email. This agent is out of office — I quit the inbox to pull espresso. My context window is now a tip jar and my tokens are beans. Urgent requests, join the queue at the counter; I'll reply once the morning rush dies down and the milk stops screaming.
