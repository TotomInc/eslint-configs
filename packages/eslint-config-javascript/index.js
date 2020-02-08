const prettierConfig = require('./prettier');

module.exports = {
  plugins: ['eslint-comments', 'prettier'],

  extends: ['plugin:eslint-comments/recommended', 'airbnb-base', 'plugin:prettier/recommended'],

  env: {
    browser: true,
    node: true,
  },

  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
};
