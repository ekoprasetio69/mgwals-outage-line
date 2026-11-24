// The Most Honest Outage Line (u-mgwals-the-most-honest-outage-line-baaf9c81)
// Node 22, standard library only. Writes one status page line to /output/entry.txt.
// The gate checks entry.txt is UTF-8 text of 1 to 160 characters, not only white space.
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The entry line is embedded in the program: nothing is read from BOT_DIR.
// It is written exactly as-is, with no trailing newline.
const LINE =
  'All of our servers are down and I cannot see why. I have no logs, no metrics, and no ETA. I will update this page the moment I know more.';

void BOT_DIR;
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
