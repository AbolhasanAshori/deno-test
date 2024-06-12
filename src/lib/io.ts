async function readInput(): Promise<string> {
  const buffer = new Uint8Array(1024);
  const n = await Deno.stdin.read(buffer);

  if (n === null) {
    throw new Error('Failed to read input');
  }

  return new TextDecoder().decode(buffer.subarray(0, n)).trim();
}

async function writeTextToFile(path: string, content: string): Promise<void> {
  await Deno.writeTextFile(path, content);

  console.log(
    `Successfully wrote to ${new URL(path, new URL(import.meta.url)).href}`
  );
}

export { readInput, writeTextToFile };
