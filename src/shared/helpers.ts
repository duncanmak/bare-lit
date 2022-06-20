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

// Constructor of type T
interface ctor<T> { new (...args: any[]): T }
export function fromResponse<T extends object>(ctor: ctor<T>, json: any, ...args: any[]): T {
    const obj = new ctor(...args);
    for (let key in json) {
        if (obj.hasOwnProperty(key)) {
            // @ts-ignore // we just checked to make sure it's there
            obj[key] = json[key];
        }
    }
    return obj;
}

