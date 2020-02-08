# @totominc/eslint-config-typescript

> Personal ESLint config for TypeScript projects: AirBnB and Prettier pre-configured.

## About this configuration

- Automatically setup your ESLint config to properly parse TypeScript with `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin`.
- Add `eslint-comments` plugin for better `// eslint` comments control.
- Add `airbnb-typescript/base` (no React/JSX support), this includes `eslint-config-airbnb-base` with tweaked rules for TypeScript.
- Add `@typescript-eslint/eslint-recommended` and `plugin:@typescript-eslint/recommended`, better TypeScript defaults.
- Add Prettier with pre-defined configuration (you can easily edit it in your own `.eslintrc`).

## Installation

### Local/per-project installation

1. Install all peer-dependencies from this package, this includes modules that are required by the
   `@totominc/eslint-config-typescript`:

   ```bash
   npx install-peerdeps --dev @totominc/eslint-config-typescript@latest --yarn
   ```

2. Check your `package.json` for a list of dev-dependencies.

3. Create an `.eslintrc.js` file configuration for ESLint in the root of your project. Then you can extend the ESLint configuration `@totominc/eslint-config-typescript`:

   ```js
   module.exports = {
     extends: ['@totominc/typescript'],
   };
   ```

**Note:** you may want to configure your IDE to automatically fix on save. For VSCode, you can use the
[`vscode-eslint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension and configure
your `settings.json` like this:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },

  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

### Global installation

1. Install all peer-dependencies from this package, this includes modules that are required by the
   `@totominc/eslint-config-typescript`:

   ```bash
   npx install-peerdeps --global eslint-config-totominc@latest --yarn
   ```

2. Create a global `.eslintrc.js` file configuration for ESLint in your home folder (e.g. `~/.eslintrc.js`). Then you
   can extend one of the provided configurations from `@totominc/eslint-config-typescript`:

   ```js
   module.exports = {
     extends: ['@totominc/typescript'],
   };
   ```
