/**
 * Public entry point for the package.
 *
 * Re-export everything consumers should be able to import from the package
 * root here. Keep this barrel thin — declare the implementation in `src/` and
 * only surface the public surface from this file.
 *
 * Note the `.js` extension on the import path: under `nodenext` module
 * resolution the specifier must match the *emitted* file, not the `.ts`
 * source.
 *
 * @example
 * ```ts
 * import { greet } from "@grml/lib-template";
 *
 * greet("world"); // "Hello, world!"
 * ```
 */

export { greet } from "./src/greet.js";

export type { GreetOptions } from "./src/greet.js";
