#! /usr/bin/env node

import {
  inputArgumnets,
  modesConfig,
  modesRefrence,
} from './lib/common/modes.js';
import { processOutput } from './lib/processor/processor.js';

const init = async () => {
  const [mode] = inputArgumnets;

  // in case there is no mode, use the default mode
  const currentMode = modesRefrence[mode] || modesConfig.interactive;

  // first getting the engine type, then the rest of the input
  const userOutput: any = await currentMode.input();

  // processing the output by generated object
  await processOutput(userOutput, currentMode, {});
};

init();
