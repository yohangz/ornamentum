const { writeFileSync, readJsonSync, writeJsonSync } = require('fs-extra');

const packageJson = readJsonSync('./package.json');
writeFileSync(
  './src/environments/version.ts',
  `// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT!
export const VERSION = '${packageJson.version}';
`,
  { encoding: 'utf-8' }
);

console.log('Wrote version info to src/environments/version.ts');

const libPackage = readJsonSync('./projects/ornamentum/package.json');
libPackage.version = String(packageJson.version);
writeJsonSync('./projects/ornamentum/package.json', libPackage, { spaces: 2, EOL: '\n' });

console.log('Wrote version info to projects/ornamentum/package.json');
