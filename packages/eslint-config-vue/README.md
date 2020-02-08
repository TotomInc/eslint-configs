# @totominc/eslint-config-vue

> Personal ESLint config for Vue + JS projects: AirBnB and Prettier pre-configured.

## About this configuration

- Use `babel` parsed with `@vue/app` babel preset.
- Add `eslint-comments` plugin for better `// eslint` comments control.
- Add `vue-eslint-plugin` recommended rules.
- Add `@vue/airbnb` (no React/JSX support). AirBnB rules tweaked for Vue.
- Add Prettier with pre-defined configuration (you can easily edit it in your own `.eslintrc`) and `prettier/vue` for a better Vue integration.

## Installation

### Local/per-project installation

1. Install all peer-dependencies from this package, this includes modules that are required by the
   `@totominc/eslint-config-vue`:

   ```bash
   npx install-peerdeps --dev @totominc/eslint-config-vue@latest --yarn
   ```

2. Check your `package.json` for a list of dev-dependencies.

3. Create an `.eslintrc.js` file configuration for ESLint in the root of your project. Then you can extend the ESLint configuration `@totominc/eslint-config-vue`:

   ```js
   module.exports = {
     extends: ['@totominc/vue'],
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
   `@totominc/eslint-config-vue`:

   ```bash
   npx install-peerdeps --global eslint-config-totominc@latest --yarn
   ```

2. Create a global `.eslintrc.js` file configuration for ESLint in your home folder (e.g. `~/.eslintrc.js`). Then you
   can extend one of the provided configurations from `@totominc/eslint-config-vue`:

   ```js
   module.exports = {
     extends: ['@totominc/vue'],
   };
   ```
