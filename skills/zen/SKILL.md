---
name: dailyzen
description: Return one randomly selected quote from 113 curated quotes.
allowed-tools: Read, Bash(node:*)
---

# Daily Zen

Run this command to select a truly random quote:

```bash
node "${CLAUDE_PLUGIN_ROOT}/skills/zen/random-quote.js"
```

Display the command's stdout exactly, with no extra text.
