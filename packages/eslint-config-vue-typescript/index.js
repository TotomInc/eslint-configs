module.exports = {
  /**
   * See https://eslint.vuejs.org/user-guide/#what-is-the-use-the-latest-vue-eslint-parser-error
   */
  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
  },

  plugins: ['eslint-comments', 'vue', 'prettier'],

  extends: [
    'plugin:eslint-comments/recommended',
    'plugin:vue/recommended',
    /**
     * See https://github.com/vuejs/eslint-config-airbnb/blob/master/index.js
     */
    '@vue/airbnb',
    /**
     * Enable `@typescript-eslint` plugin, set parser-options, includes `.vue`
     * files, extends `plugin:@typescript-eslint/eslint-recommended`.
     * 
     * See https://github.com/vuejs/eslint-config-typescript/blob/master/index.js
     */
    '@vue/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/vue',
  ],

  env: {
    browser: true,
    node: true,
  },

  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',

    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        tabs: false,
        semi: true,
        singleQuote: true,
        jsxSingleQuote: false,
        quoteProps: 'as-needed',
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'always',
      },
    ],

    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 20,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],

    'class-methods-use-this': 'off',
  },
};
