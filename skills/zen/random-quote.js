#!/usr/bin/env node

const { randomInt } = require("node:crypto");
const { readFileSync } = require("node:fs");
const path = require("node:path");

const quotesPath = path.join(__dirname, "quotes.json");
const quotes = JSON.parse(readFileSync(quotesPath, "utf8"));

if (!Array.isArray(quotes) || quotes.length === 0) {
  process.stderr.write("No quotes available.\n");
  process.exit(1);
}

const quote = quotes[randomInt(quotes.length)];
process.stdout.write(`"${quote.quote}"\n— ${quote.author}\n`);
