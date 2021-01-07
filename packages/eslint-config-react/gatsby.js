const defaults = require('./lib/defaults');
const js = require('./lib/overrides/javascript');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  ...defaults,

  globals: {
    __PATH_PREFIX__: true,
  },

  overrides: [{ ...js }],

  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/no-danger': 'off',
  },
};
