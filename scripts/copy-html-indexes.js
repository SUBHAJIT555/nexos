const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");

if (!fs.existsSync(outDir)) {
  process.exit(0);
}

const apiEnv = path.join(outDir, "api", ".env");
if (fs.existsSync(apiEnv)) {
  fs.unlinkSync(apiEnv);
  console.log("Removed api/.env from out/ (upload .env on server only)");
}

const apiData = path.join(outDir, "api", "data");
if (fs.existsSync(apiData)) {
  for (const name of fs.readdirSync(apiData)) {
    if (name.endsWith(".json")) {
      fs.unlinkSync(path.join(apiData, name));
      console.log("Removed api/data/" + name + " from out/");
    }
  }
}

for (const name of fs.readdirSync(outDir)) {
  if (!name.endsWith(".html") || name === "index.html" || name === "404.html") {
    continue;
  }

  const base = name.slice(0, -5);
  const folder = path.join(outDir, base);

  if (!fs.existsSync(folder) || !fs.statSync(folder).isDirectory()) {
    continue;
  }

  const htmlPath = path.join(outDir, name);
  const dest = path.join(folder, "index.html");
  fs.copyFileSync(htmlPath, dest);
  console.log("Wrote", path.relative(outDir, dest));
}
