const { version } = require('../package.json');
const { resolve } = require('path');
const { writeFileSync } = require('fs-extra');

const file = resolve(__dirname, 'environments', 'version.ts');
writeFileSync(file,
`// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT!
export const VERSION = '${version}';
`, { encoding: 'utf-8' });

console.log(`Wrote version info to src/environments/version.ts`);
