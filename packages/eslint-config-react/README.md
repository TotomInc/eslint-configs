# `@totominc/eslint-config-react`

## About this configuration

- `eslint-comments`: better control over `// eslint` comments and avoid its abuse.
- `jsx-a11y`: enforce a11y best-practices.
- `airbnb` + `airbnb-typescript`: based on the Airbnb code-styleguide both for JavaScript and TypeScript.
- `prettier`: alread configured `.prettierrc.js`.
- `jest`: enforce best-practices when writing unit-tests with `Jest`.

## Installation

### JavaScript projects

1. Install peer-dependencies required for this ESLint config:

   ```bash
   yarn add -D @totominc/eslint-config-react babel-eslint@^10.0.0 eslint eslint-config-airbnb@^18.2.0 eslint-config-prettier@^6.12.0 eslint-plugin-eslint-comments@^3.2.0 eslint-plugin-import@^2.22.0 eslint-plugin-jest@^24.1.0 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-prettier@^3.1.4 eslint-plugin-promise@^4.2.1 eslint-plugin-react@^7.21.5 eslint-plugin-react-hooks@^4.2.0 prettier@^2.1.2
   ```

2. Create an `.eslintrc.js` file at the root of your project. Then you can extend the ESLint configuration `@totominc/eslint-config-react` like below:

   ```js
    module.exports = {
      extends: ['@totominc/react'],
    };
   ```

### TypeScript projects

1. Install peer-dependencies required for this ESLint config:

   ```bash
   yarn add -D @totominc/eslint-config-react @typescript-eslint/eslint-plugin@^4.4.1 @typescript-eslint/parser@^4.7.0 babel-eslint@^10.0.0 eslint eslint-config-airbnb-typescript@^12.0.0 eslint-config-prettier@^6.12.0 eslint-plugin-eslint-comments@^3.2.0 eslint-plugin-import@^2.22.0 eslint-plugin-jest@^24.1.0 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-prettier@^3.1.4 eslint-plugin-promise@^4.2.1 eslint-plugin-react@^7.21.5 eslint-plugin-react-hooks@^4.2.0 prettier@^2.1.2
   ```

2. Create an `.eslintrc.js` file at the root of your project. Then you can extend the ESLint configuration `@totominc/eslint-config-react` like below:

   ```js
    module.exports = {
      extends: ['@totominc/react/typescript'],

      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
    };
   ```

## License

MIT license, please see the LICENSE file in this project.
