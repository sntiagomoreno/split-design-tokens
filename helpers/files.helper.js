// Get all theme files
const { readdirSync, statSync } = require("fs");
const { join } = require("path");
const dirs = (p) => readdirSync(p).filter((f) => statSync(join(p, f)));
exports.themes = dirs(join(__dirname, "..", "src", "transformed"))
  .filter((name) => name.includes("theme"))
  .map((name) => name.replace("theme-", "").replace(".json", ""));
exports.files = dirs(join(__dirname, "..", "src", "transformed"))
  .filter((name) => !name.includes("theme"))
  .map((name) => name.replace(".json", ""));
