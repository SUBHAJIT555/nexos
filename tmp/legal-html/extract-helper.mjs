import fs from 'fs';
import path from 'path';

const cdpFile = process.argv[2];
const outFile = process.argv[3];

if (!cdpFile || !outFile) {
  console.error('Usage: node extract-helper.mjs <cdp-json> <output-html>');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(cdpFile, 'utf8'));
const v = data.result?.value;

if (!v?.innerHTML) {
  console.error('No innerHTML in CDP response');
  process.exit(1);
}

fs.writeFileSync(outFile, v.innerHTML);
console.log(JSON.stringify({
  pageTitle: v.pageTitle,
  effectiveDate: v.effectiveDate,
  containerClasses: v.containerClasses,
  containerTag: v.containerTag,
  maxWidth: v.maxWidth,
  url: v.url,
  tableCount: v.tableCount,
  htmlLength: v.innerHTML.length,
  outputFile: outFile,
}, null, 2));
