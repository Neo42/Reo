module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'react/prefer-stateless-function': 'off',
    'react/state-in-constructor': 'off',
  },
  parser: 'babel-eslint',
};
