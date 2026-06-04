# @grml/lib-template

An ESM-friendly TypeScript library template, set up for testing and CI.

> Publishing and deployment are handled manually (custom npm settings), so no
> release/publish workflow is included here.

## What's inside

- **ESM-native** — `"type": "module"`, `nodenext` module resolution,
  `verbatimModuleSyntax`, and a thin `index.ts` barrel that re-exports from
  `src/` using `.js` specifiers.
- **TypeScript** — strict `tsconfig.json` emitting JS to `dist/` and `.d.ts`
  (+ declaration maps) to `dist/types/`.
- **Testing** — Node's built-in test runner (`node:test` / `node:assert`) run
  directly against TypeScript via [`tsx`](https://tsx.is). No extra framework,
  no compile step, and nothing test-related ends up in `dist/`.
- **Linting** — flat ESLint config using `typescript-eslint` (tabs, double
  quotes).
- **CI** — `.github/workflows/ci.yml` runs lint → typecheck → test → build on
  pushes and PRs, and uploads the `dist/` artifact.
- **Dependabot** — daily npm + GitHub Actions update PRs.

## Getting started

1. Copy this directory and update `package.json` (`name`, `description`,
   `repository`, `keywords`).
2. Replace `src/greet.ts` with your implementation and update the re-exports in
   `index.ts`.
3. Add tests under `tests/` as `*.test.ts`.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run build` | Compile `src/` + `index.ts` to `dist/` with type declarations. |
| `npm run typecheck` | Type-check without emitting. |
| `npm run lint` | Run ESLint. |
| `npm test` | Run the test suite with the Node test runner via `tsx`. |

## Project layout

```
.
├── index.ts            # public barrel — re-export your API here
├── src/                # implementation
│   └── greet.ts
├── tests/              # *.test.ts, run with node --test via tsx
│   ├── greet.test.ts
│   └── tsconfig.json   # type-checks tests against the source
├── eslint.config.mjs
├── tsconfig.json
└── .github/
    ├── workflows/ci.yml
    └── dependabot.yml
```

## Publishing (manual)

Only `dist/` is published (`"files": ["dist"]` in `package.json`, with
`.npmignore` as a backstop). Build first, then publish with your custom npm
settings:

```sh
npm run build
npm publish   # with whatever registry/auth settings you use
```
