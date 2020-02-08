const prettierConfig = require('./prettier');

module.exports = {
  plugins: ['eslint-comments', '@typescript-eslint', 'prettier'],

  extends: [
    'plugin:eslint-comments/recommended',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },

  env: {
    browser: true,
    es6: true,
    node: true,
  },

  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
};
