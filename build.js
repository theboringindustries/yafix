import fs from 'fs';

import { build } from 'esbuild';

fs.rmSync('dist', { force: true, recursive: true });

build({
  entryPoints: ['src/inject.js', 'src/script.js'],
  outdir: 'dist',
  bundle: true,
  minify: true,
  target: ['es2020'],
})
  .then(() => {
    fs.copyFileSync('public/manifest.json', 'dist/manifest.json');
    fs.copyFileSync('public/icon-128.png', 'dist/icon-128.png');
  })
  .catch(() => process.exit(1));
