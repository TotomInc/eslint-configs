# `@totominc/eslint-config-react`

## About this configuration

- `airbnb` + `airbnb-typescript`: based on the Airbnb code-styleguide both for JavaScript and TypeScript, with adaptations for React projects.
- `jsx-a11y`: enforce a11y best-practices.
- `promise`: enforce best-practices around JS promises.
- `eslint-comments`: better control over `// eslint` comments and avoid disabling all ESLint rule abuse.
- `prettier`: an opinionated code-styleguide which is pre-configured. It is possible to overwrite this for your personal preference.
- `jest`: enforce best-practices when writing unit-tests with `Jest`.
- `eslint:recommended`: recommended ESLint rules.

## Installation

This is an hybrid ESLint config which works for both JavaScript and TypeScript projects.

1. Install peer-dependencies required for this ESLint config by running:

   ```bash
   # It will detect if you are using Yarn and ask you to use Yarn instead of
   # NPM if it's the case.
   npx install-peerdeps --dev @totominc/eslint-config-react
   ```

2. Create an `.eslintrc.js` file at the root of your project.T hen you can extend the ESLint configuration `@totominc/eslint-config-react` like below:

   ```js
   module.exports = {
      extends: '@totominc/react',

      // Add this part if you are using the ESLint config on a TypeScript project
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
   };
   ```

## License

MIT license, please see the LICENSE file in this project.
