Install deno

https://deno.land/manual/getting_started/installation

Install file_server:

```powershell
deno install --allow-net --allow-read https://deno.land/std@0.133.0/http/file_server.ts
```

Build:

```powershell
deno task build
```

Start:

```powershell
deno task serve
```

Test:

```powershell
deno task test
```
