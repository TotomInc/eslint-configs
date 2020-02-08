module.exports = {
  plugins: ['eslint-comments', 'vue', 'prettier'],

  extends: [
    'plugin:eslint-comments/recommended',
    'plugin:vue/recommended',
    '@vue/airbnb',
    'plugin:prettier/recommended',
  ],

  env: {
    browser: true,
    node: true,
  },

  parserOptions: {
    parser: 'babel-eslint',

    babelOptions: {
      presets: ['@vue/app'],
    },
  },

  rules: {
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
  },
};
