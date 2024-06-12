import { readInput, writeTextToFile } from '../lib/io.ts';

console.log('Enter Url: ');

const url = await readInput();

const result = await fetch(url);
const data = await result.json();

await writeTextToFile('data.json', JSON.stringify(data));
console.log('Content successfully loaded!');
