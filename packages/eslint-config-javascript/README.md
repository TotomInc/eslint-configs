# @totominc/eslint-config-javascript

> Personal ESLint config for JavaScript projects: AirBnB and Prettier pre-configured.

## About this configuration

- Add `eslint-comments` plugin for better `// eslint` comments control.
- Add `airbnb-base` (no React/JSX support).
- Add Prettier with pre-defined configuration (you can easily edit it in your own `.eslintrc`).

## Installation

### Local/per-project installation

1. Install all peer-dependencies from this package, this includes modules that are required by the
   `@totominc/eslint-config-javascript`:

   ```bash
   npx install-peerdeps --dev @totominc/eslint-config-javascript@latest --yarn
   ```

2. Check your `package.json` for a list of dev-dependencies.

3. Create an `.eslintrc.js` file configuration for ESLint in the root of your project. Then you can extend the ESLint configuration `@totominc/eslint-config-javascript`:

   ```js
   module.exports = {
     extends: ['@totominc/javascript'],
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
   `@totominc/eslint-config-javascript`:

   ```bash
   npx install-peerdeps --global eslint-config-totominc@latest --yarn
   ```

2. Create a global `.eslintrc.js` file configuration for ESLint in your home folder (e.g. `~/.eslintrc.js`). Then you
   can extend one of the provided configurations from `@totominc/eslint-config-javascript`:

   ```js
   module.exports = {
     extends: ['@totominc/javascript'],
   };
   ```
