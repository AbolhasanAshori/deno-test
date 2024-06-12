const server = Deno.serve(
  { port: 3000 },
  _req => new Response('Hello World from Deno Server')
);
