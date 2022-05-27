import { serve } from "https://deno.land/std@0.141.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.141.0/http/file_server.ts";
import { join } from "https://deno.land/std@0.141.0/path/mod.ts";

serve((req) => {
  const pathname = new URL(req.url).pathname;
  if (map.has(pathname)) {
    const filename = join(Deno.cwd(), map.get(pathname)!)
    return serveFile(req, filename);
  }

  // Do dynamic responses
  return serveFile(req, map.get("/")!);
});

const map = new Map([
  ["/", "build/shell/index.html"],
  ["/main.js", "build/shell/main.js"],
  ["/hello/main.ts", "build/hello/main.js"],
  ["/bonjour/main.ts", "build/bonjour/main.js"]
])