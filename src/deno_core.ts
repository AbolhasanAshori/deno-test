const text = 'This is a message written using Deno.';

const encoder = new TextEncoder();
const data = encoder.encode(text);

Deno.writeFile('text.txt', data);
