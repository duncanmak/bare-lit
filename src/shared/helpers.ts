export function toString(a: unknown): string {
  if (typeof a == 'string') return `"${a}"`;

  if (a instanceof Array) return `[ ${a.map(toString)} ]`;

  if (a instanceof Function) return a.toString();

  if (a === null) return 'null';

  if (typeof a == 'object')
    return `{ ${Object.entries(a).map(([k, v]) => `${k}: ${toString(v)}`)} }`;

  console.log(typeof a);
  return 'error';
}
