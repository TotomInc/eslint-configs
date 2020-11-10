const defaults = require('./lib/defaults');
const js = require('./lib/overrides/javascript');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  ...defaults,

  overrides: [{ ...js }],
};
