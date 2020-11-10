const sharedRules = require('../shared-rules');

module.exports = {
  files: ['**/*.ts?(x)'],

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint', 'eslint-comments', 'jsx-a11y', 'prettier', 'jest'],

  extends: [
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:jest/recommended',

    'airbnb-typescript',
    'airbnb/hooks',

    'plugin:jsx-a11y/recommended',

    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],

  rules: { ...sharedRules },
};
