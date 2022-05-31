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
  ["/", "build/index.html"],
  ["/main.js", "build/shell/shell.bundle.js"],
  ["/hello/main.ts", "build/hello/hello.bundle.js"],
  ["/bonjour/main.ts", "build/bonjour/bonjour.bundle.js"]
])