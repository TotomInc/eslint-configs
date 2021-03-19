'use strict';

module.exports = {
  plugins: ['jest', 'testing-library'],

  extends: [
    'plugin:jest/all',
    'plugin:testing-library/recommended',
    'plugin:testing-library/react',
  ],

  overrides: [
    {
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],

      env: {
        'jest/globals': true,
      },
    },
  ],
};
