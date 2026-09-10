import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';

export default [
  js.configs.all,
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['node_modules/', 'dist/'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        console: 'readonly',
        document: 'readonly',
        window: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      sourceType: 'module',
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,

      // eslint-disable-next-line no-magic-numbers
      'indent': ['error', 2],
      'max-len': ['error', { 'code': 120 }],
      'no-ternary': 'off',
      'one-var': 'off',
      'sort-imports': ['error', { 'ignoreCase': true }],
    },
    settings: {
      react: { version: '19' },
    },
  },
];
