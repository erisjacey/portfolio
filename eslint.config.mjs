import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'
import nextPlugin from '@next/eslint-plugin-next'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactPlugin from 'eslint-plugin-react'

const eslintConfig = defineConfig([
  nextPlugin.configs['recommended'],
  ...tseslint.configs.recommended,
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      semi: ['error', 'never'],
      quotes: ['error', 'single', { avoidEscape: true }],
    },
  },
  {
    plugins: {
      react: reactPlugin,
    },
    rules: {
      // ---- Functional style only ----
      'func-style': ['error', 'expression'],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'FunctionDeclaration',
          message: 'Use arrow functions instead of function declarations.',
        },
        {
          selector: 'ExportDefaultDeclaration FunctionDeclaration',
          message:
            "Components must use arrow functions — don't default export function components.",
        },
      ],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],

      // ---- Braces & parentheses ----
      curly: ['error', 'all'],

      // ---- Hooks & naming ----
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-pascal-case': 'error',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',

      // ---- Props ----
      'react/prop-types': 'off',
      'react/no-unused-prop-types': 'error',

      // ---- Prettier integration ----
      'prettier/prettier': 'error',
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
])

export default eslintConfig
