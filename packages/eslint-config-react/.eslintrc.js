const prettierConfig = require('./prettier');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },

  ignorePatterns: ['node_modules/', 'dist/'],
  plugins: ['eslint-comments', 'prettier'],
  extends: [
    'plugin:eslint-comments/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'prettier/react',
  ],

  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
};
