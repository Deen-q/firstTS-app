// Snowpack is a bundler --> needed so browser can access node_modules folder (bundles the folder so browser can understand it)
// All files were deleted, if any, then 'npx create-snowpack-app . --template @snowpack/app-template-blank-typescript' was used
// '.' means it occurs in this folder. '--force' to enable that, if it gives an error.

/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import confetti from 'canvas-confetti';

confetti.create(document.getElementById('canvas') as HTMLCanvasElement, {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });
