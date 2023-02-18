# TypeScript Starter (with new `--watch`!)

## Get Started

After running `npm i` (you might want to install the [recommended extensions](./.vscode/extensions.json) too if/when prompted to do so in VS Code), in 1️⃣ CLI, run: `npm run build` and in 2️⃣ CLI, run: `npm start`. This will run `tsc` in watch mode on `src` and `node` on `--watch` on `dist`.

There are a couple of files in `src` to give idea of how 💩 works.

### `vitest`

Run `npm t` or `npm run test:coverage` to run tests with [vitest](https://vitest.dev/).

[Sample test](./test/lib.test.ts).

## [Settings](./.vscode/settings.json)

This project includes ESLint with `standard` and `@typescript-eslint` plugins. It also includes Prettier.

Basically, every time you save (automatically happens: `"files.autoSave": "onFocusChange",`), it will format your code and lint it. If you have the recommended extensions installed, you will see the errors and warnings in the editor.

## [tsconfig.json](./tsconfig.json)

1. `"extends": "@tsconfig/node18/tsconfig.json",`
2. `compilerOptions` are based on [Fireship's ℹ️](https://fireship.io/lessons/typescript-nodejs-setup/).
3. Includes TS `--watch` configuration from [doc's 📝 example](https://www.typescriptlang.org/docs/handbook/configuring-watch.html)
