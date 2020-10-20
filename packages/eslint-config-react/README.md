# @totominc/eslint-config-react

> Personal ESLint config for React. Includes support for TypeScript. Airbnb + TypeScript + Prettier pre-configured and some extras.

## About this configuration

- Add `eslint-comments` plugin for better `// eslint` comments control and avoid abuse.
- Enforce a11y best-practices with `jsx-a11y`.
- This config is based on `airbnb` config, it will use `airbnb-typescript` for TypeScript variant.
- Add Prettier with a pre-defined configuration (can be overridden).
- Enable recommended rules for Jest unit-testing.

## Installation

1. Install peer-dependencies required for this ESLint config:

   - For JavaScript projects:

      ```bash
      yarn add -D @totominc/eslint-config-react@latest babel-eslint@^10.0.0 eslint eslint-config-airbnb@^18.2.0 eslint-config-prettier@^6.12.0 eslint-plugin-eslint-comments@^3.2.0 eslint-plugin-import@^2.22.1 eslint-plugin-jest@^24.1.0 eslint-plugin-jsx-a11y@^6.3.1 eslint-plugin-prettier@^3.1.4 eslint-plugin-promise@^4.2.1 eslint-plugin-react@^7.21.3 eslint-plugin-react-hooks@^4.1.2 prettier@^2.1.2
      ```

   - For TypeScript projects:
   
      ```bash
      yarn add -D @totominc/eslint-config-react@latest @typescript-eslint/eslint-plugin@^4.1.0 @typescript-eslint/parser@^4.1.0 babel-eslint@^10.0.0 eslint eslint-config-airbnb@^18.2.0 eslint-config-prettier@^6.12.0 eslint-plugin-eslint-comments@^3.2.0 eslint-plugin-import@^2.22.1 eslint-plugin-jest@^24.1.0 eslint-plugin-jsx-a11y@^6.3.1 eslint-plugin-prettier@^3.1.4 eslint-plugin-promise@^4.2.1 eslint-plugin-react@^7.21.3 eslint-plugin-react-hooks@^4.1.2 prettier@^2.1.2
      ```

2. Create an `.eslintrc.js` at the root of your project. Then you can extend the ESLint configuration `@totominc/eslint-config-react` like below:

   ```js
    module.exports = {
      extends: ['@totominc/react'],

      // This is required if you are using the TypeScript variant of the ESLint config.
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
    };
   ```

## License

MIT license, please see the LICENSE file in this project.
