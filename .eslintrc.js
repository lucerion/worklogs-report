module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'parser': '@babel/eslint-parser',
  'parserOptions': {
    'ecmaVersion': 9,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'plugins': ['react'],
  'rules': {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'max-len': ['error', { 'code': 120 }],
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': ['error', { 'allow': ['warn', 'error'] }],
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
};
