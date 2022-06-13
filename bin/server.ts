import { serve } from "https://deno.land/std@0.141.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.141.0/http/file_server.ts";
import { join, parse } from "https://deno.land/std@0.141.0/path/mod.ts";

const _ = (...s: string[]) => join(Deno.cwd(), ...s);

export function runServer() {
  return serve((req) => {
    const pathname = parse(new URL(req.url).pathname);
    const indexHtml = serveFile(req, _("build", "index.html"));

    console.log(pathname);

    if (pathname.base === "") return indexHtml;

    try {
      return pathname.ext !== ""
        ? serveFile(req, _("build", pathname.dir, pathname.base))
        : indexHtml;
    } catch {
      return indexHtml;
    }
  });
}
