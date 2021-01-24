const prettierrc = require('../.prettierrc');

module.exports = {
  // Explicit over implicit, especially when sharing various pieces of logic,
  // this includes React components, JS classes, etc.
  'import/prefer-default-export': 'off',

  'prettier/prettier': ['error', prettierrc],
};
