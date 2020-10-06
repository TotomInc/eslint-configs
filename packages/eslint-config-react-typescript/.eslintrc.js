const prettierConfig = require('./prettier');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },

  ignorePatterns: ['node_modules/', 'dist/', 'build/'],
  plugins: ['@typescript-eslint', 'eslint-comments', 'prettier'],
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
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
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

  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'prettier/prettier': ['error', prettierConfig],
    'class-methods-use-this': 'off',
  },
};
