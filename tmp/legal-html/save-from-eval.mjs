import fs from 'fs';

const [, , jsonPath, outPath] = process.argv;
if (!jsonPath || !outPath) {
  console.error('Usage: node save-from-eval.mjs <json-with-result> <output.html>');
  process.exit(1);
}

const payload = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const value = payload.result?.value ?? payload;
if (!value?.innerHTML) {
  console.error('Missing innerHTML');
  process.exit(1);
}

fs.writeFileSync(outPath, value.innerHTML);
console.log(JSON.stringify({
  pageTitle: value.pageTitle,
  effectiveDate: value.effectiveDate,
  containerClasses: value.containerClasses,
  documentMaxWidth: value.documentMaxWidth ?? value.maxWidth,
  htmlLength: value.innerHTML.length,
  outputFile: outPath,
}, null, 2));
