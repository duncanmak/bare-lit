import { serve } from "https://deno.land/std@0.141.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.141.0/http/file_server.ts";
import { join, parse } from "https://deno.land/std@0.141.0/path/mod.ts";

const _ = (s: string) => join(Deno.cwd(), s);

serve((req) => {
  const pathname = parse(new URL(req.url).pathname);

  console.log(pathname);
  if (pathname.base === "") return serveFile(req, _("build/index.html"));

  try {
    return serveFile(
      req,
      pathname.ext !== "" ? _(`build/${pathname.base}`) : _("build/index.html")
    );
  } catch {
    return serveFile(req, _("build/index.html"));
  }
});
