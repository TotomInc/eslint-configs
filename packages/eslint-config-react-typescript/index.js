const prettierConfig = require('./prettier');

module.exports = {
  plugins: ['@typescript-eslint', 'eslint-comments', 'prettier'],

  ignorePatterns: ['node_modules/', 'dist/'],

  extends: [
    'plugin:eslint-comments/recommended',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },

    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.ts', '.d.ts', '.jsx', '.tsx', '.json'],
      },
    },
  },

  env: {
    browser: true,
    es6: true,
    node: true,
  },

  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',

    'prettier/prettier': ['error', prettierConfig],

    'class-methods-use-this': 'off',
  },
};
