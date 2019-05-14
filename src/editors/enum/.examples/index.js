const files = require('./*.json');
const examples = {};
let def = '';
for (const fileName in files) {
  if (fileName === 'index') continue;
  if (fileName.startsWith('_')) continue;
  if (fileName.startsWith('.')) continue;
  if (!def) def = fileName;
  examples[fileName] = files[fileName];
}

examples['default'] = def;

export default examples;
