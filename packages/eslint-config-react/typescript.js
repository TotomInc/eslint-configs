const defaults = require('./lib/defaults');
const js = require('./lib/overrides/javascript');
const ts = require('./lib/overrides/typescript');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  ...defaults,

  overrides: [{ ...js}, { ...ts }],
};
