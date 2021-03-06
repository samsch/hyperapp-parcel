module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  settings: {
    "react": {
      "pragma": "h",  // Pragma to use, default to "React"
    },
  },
  plugins: ['react'],
  rules: {
    semi: ['error', 'always'],
    'array-callback-return': 'warn',
    eqeqeq: ["error", "always", {"null": "ignore"}],
    'no-empty-function': 'warn',
    'no-eval': 'warn',
    'no-implied-eval': 'warn',
    'no-invalid-this': 'error',
    'no-param-reassign': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-self-compare': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-return': 'warn',
    'no-void': 'error',
    'no-warning-comments': 'warn',
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    'wrap-iife': ['error', 'inside'],
    'no-shadow-restricted-names': 'error',
    'no-use-before-define': 'error',
    'quotes': ["warn", "single"],
    'space-before-function-paren': 'error',
    'no-trailing-spaces': 'error',
    'arrow-spacing': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'prefer-const': 'error',

    "react/prop-types": ['error', { skipUndeclared: true }],
    "react/no-unknown-property": ['error', { ignore: ['onclick', 'onchange', 'oninput', 'class'] }],
  },
};
