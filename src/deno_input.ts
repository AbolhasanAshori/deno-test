import { readInput, writeTextToFile } from './lib/io.ts';

console.log('Enter your input: ');
const text = await readInput();
console.log(`Entered input: ${text}`);
await writeTextToFile('text.json', text);
