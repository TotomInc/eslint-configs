# `@totominc/eslint-configs`

> Sharing my most used ESLint configs, hosted on NPM registry.

## Configurations available

- [`@totominc/javascript`](https://github.com/TotomInc/eslint-configs/tree/master/packages/eslint-config-javascript): default configuration for JavaScript projects.

- [`@totominc/typescript`](https://github.com/TotomInc/eslint-configs/tree/master/packages/eslint-config-typescript): configuration for TypeScript projects, extends `typescript-airbnb` ESLint config.

- [`@totominc/react`](https://github.com/TotomInc/eslint-configs/tree/master/packages/eslint-config-react): configuration for JavaScript React projects (recommended alongside create-react-app).

- [`@totominc/react-typescript`](https://github.com/TotomInc/eslint-configs/tree/master/packages/eslint-config-react-typescript): configuration for TypeScript React projects (recommended alongside create-react-app).

- [`@totominc/vue`](https://github.com/TotomInc/eslint-configs/tree/master/packages/eslint-config-vue): configuration for Vue.js projects initialized with the official Vue CLI tool.

- [`@totominc/vue-typescript`](https://github.com/TotomInc/eslint-configs/tree/master/packages/eslint-config-vue-typescript): configuration for Vue.js + TypeScript projects initialized with the official Vue CLI tool.

## Install an ESLint config

> View the `README.md` of the desired configuration in the `/packages` folder for more details about it.

For a quick setup, you can

1. use `npx` to install peer-deps of an ESLint config:

    ```bash
    # For NPM
    npx install-peerdeps --dev @totominc/<eslint-config-name-here>@latest

    # For Yarn
    npx install-peerdeps --dev @totominc/<eslint-config-name-here>@latest --yarn
    ```

2. Create an `.eslintrc.js` file which extends the ESLint configuration you installed:

    ```javascript
    // .eslintrc.js
    module.exports = {
      extends: ['totominc/<eslint-config-name-here>'],

      // If using a TypeScript config, you may need to put additional ESLint settings such as:
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: '.',
      },

      settings: {
        'import/resolver': {
          typescript: {
            'directory': './tsconfig.json',
          },
        }
      },
    };
    ```

3. (optional) you may want to configure your IDE to automatically fix on save. For VSCode, you can use the
[`vscode-eslint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension and configure
your `.vscode/settings.json` like this:

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

## License

MIT, view the `LICENSE` file in each ESLint config folder.
