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
};
