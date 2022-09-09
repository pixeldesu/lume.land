// deno run --allow-net --allow-read serve.ts
import Server from "lume/core/server.ts";
import expires from "lume/middlewares/expires.ts";
import cacheBusting from "lume/middlewares/cache_busting.ts";
import analytics from "https://raw.githubusercontent.com/lumeland/experimental-plugins/main/google_analytics/mod.ts";
import fscache from "https://raw.githubusercontent.com/lumeland/experimental-plugins/main/fs_cache/mod.ts";

const server = new Server({
  port: 8000,
  root: `${Deno.cwd()}/_site`,
});

server
  .use(expires())
  .use(cacheBusting())
  .use(analytics({ id: "UA-110819-22" }))
  .use(fscache())
  .start();

console.log("Listening on http://localhost:8000");
