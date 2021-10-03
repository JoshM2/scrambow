import { Command } from 'commander';
import { Scrambow } from './scrambow';
import { Scramble } from './types';
import { version, name } from '../package.json';

const cli = new Command();

cli
  .name(name)
  .version(`${name} ${version}`)
  .option('-n, --number [num]', 'set amount of scrambles to generate')
  .option('-t, --type [string]', 'set the scramble type', '333')
  .option('-s, --seed [num]', 'set seed')
  .option('-l, --length [num]', 'set scramble length')
  .arguments('[arguments]')
  .parse(process.argv);

const out = new Scrambow();
let scrambles: Scramble[];

const { type, seed, length, number } = cli.opts();

try {
  out.setType(type);
  out.setArgs(...cli.args);
  if (seed) {
    out.setSeed(seed);
  }
  if (length) {
    out.setLength(length);
  }
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  }
  process.exit(1);
}

if (number) {
  scrambles = out.get(number);
} else {
  scrambles = out.get();
}

console.log(scrambles.map(s => s.scramble_string).join('\n\n'));
