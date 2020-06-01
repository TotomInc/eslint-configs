const prettierConfig = require('./prettier');

module.exports = {
  plugins: ['eslint-comments', 'prettier'],

  ignorePatterns: ['node_modules/', 'dist/'],

  extends: [
    'plugin:eslint-comments/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'prettier/react',
  ],

  env: {
    browser: true,
    es6: true,
    node: true,
  },

  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
};
