# Bare-Lit

## Helpful Links:

[Deno Installation](https://deno.land/manual/getting_started/installation) | [Deno Docs](https://doc.deno.land/) | [Drake Docs](https://github.com/srackham/drake) | [Atlas Docs](https://design.docs.microsoft.com/atomics/lists.html) | [Playwright Docs](https://playwright.dev/docs/intro) | [Lit Docs](https://lit.dev/docs/) | [Open Web Components](https://open-wc.org/)

## Set-Up

Install Deno _([why deno?](https://www.youtube.com/watch?v=M3BM9TB-8yA))_

Since playwright is not yet compatible with deno, we must use npm for tests

```powershell
npm i
```

If using Powershell add drake function below to your $profile

```powershell
function drake {
    param([Parameter (Mandatory = $true)] [String]$Task)
    deno task drake $Task
}
```

If using Bash add drake alias below to .bashrc

```powershell
alias drake="deno task drake"
```

## Running Locally

Start:

```powershell
drake serve
```

Start Section:

```powershell
drake serve-<section-name>
```

Build:

```powershell
drake build
```

Build Section:

```powershell
drake build-<section-name>
```

Clear build:

```powershell
drake clean
```

Test:

```powershell
deno task test
```