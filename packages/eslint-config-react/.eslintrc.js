const prettierrc = require('./.prettierrc');

const sharedRules = {
  'prettier/prettier': ['error', prettierrc],
};

/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: 'babel-eslint',

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },

    jest: {
      version: 'detect',
    },
  },

  ignorePatterns: ['node_modules/', 'coverage/', 'dist/'],

  overrides: [
    {
      files: ['**/*.js?(x)'],

      plugins: ['eslint-comments', 'jsx-a11y', 'prettier', 'jest'],

      extends: [
        'plugin:eslint-comments/recommended',
        'plugin:promise/recommended',
        'plugin:jest/recommended',
    
        'airbnb',
        'airbnb/hooks',

        'plugin:jsx-a11y/recommended',

        'eslint:recommended',
        
        'plugin:prettier/recommended',
        'prettier/babel',
        'prettier/react',
      ],

      rules: { ...sharedRules },
    },
    {      
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
    },
  ],
};
