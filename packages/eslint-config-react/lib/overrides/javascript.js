const sharedRules = require('../shared-rules');

module.exports = {
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
};
