# @totominc/eslint-config-vue-typescript

> Personal ESLint config for Vue + TS projects: AirBnB and Prettier pre-configured.

## About this configuration

- `eslint-comments` plugin for better `// eslint` comments control.
- `vue-eslint-plugin` recommended rules.
- `@vue/airbnb` (no React/JSX support). AirBnB rules tweaked for Vue.
- `@vue/typescript` which set some defaults for TypeScript + Vue.
- `plugin:@typescript-eslint/recommended` enable recommended rules for TypeScript.
- `prettier` with pre-defined configuration (you can easily edit it in your own `.eslintrc`)
   - `prettier/@typescript-eslint` for TypeScript related rules.
   - `prettier/vue` for a better Vue integration.

## Installation

### Local/per-project installation

1. Install all peer-dependencies from this package, this includes modules that are required by the
   `@totominc/eslint-config-vue-typescript`:

   ```bash
   npx install-peerdeps --dev @totominc/eslint-config-vue-typescript@latest --yarn
   ```

2. Check your `package.json` for a list of dev-dependencies.

3. Create an `.eslintrc.js` file configuration for ESLint in the root of your project. Then you can extend the ESLint configuration `@totominc/eslint-config-vue-typescript`:

   ```js
   module.exports = {
     extends: ['@totominc/vue-typescript'],
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
   `@totominc/eslint-config-vue-typescript`:

   ```bash
   npx install-peerdeps --global @totominc/eslint-config-vue-typescript@latest --yarn
   ```

2. Create a global `.eslintrc.js` file configuration for ESLint in your home folder (e.g. `~/.eslintrc.js`). Then you
   can extend one of the provided configurations from `@totominc/eslint-config-vue-typescript`:

   ```js
   module.exports = {
     extends: ['@totominc/vue-typescript'],
   };
   ```
