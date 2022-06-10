# TODO

- [x] Try Vaadin Router
- [x] Write a separate component
- [x] Write Shell
- [x] Figure out `@property` and how to avoid `requestUpdate()`
  - Currently cant use decorators so we switched to old way
- [ ] Update to decorators once https://github.com/lit/lit-element/issues/1030 is resolved
- [x] Test using Playwright
  - Deno Integration is not yet supported by PlayWright so have to do through npm
- [ ] Update to using deno integrated version of playwright once https://github.com/microsoft/playwright/issues/3146 is resolved
- [ ] Test running the components individually
- [ ] Authenticated routes to support user roles
- [ ] Look into nesting routes. (Move route registration into the child components themselves)
- [ ] Look into how the router and webserver interact
-     currently serving index.html over and over
- [ ] Tree shaking the CSS
-     Server-side rendering?