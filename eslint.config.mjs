import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 1,
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-mixed-spaces-and-tabs': 1,
      'react/react-in-jsx-scope': 0,
    },
  },
];
