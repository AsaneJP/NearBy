module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
    "import",
    "unused-imports",
  ],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    "@typescript-eslint/restrict-template-expressions": "off",
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "warn",
    'react/function-component-definition': [
        2,
        {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
        },
    ],
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    "import/order": [
      "warn",
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
        "newlines-between": "always",
        "pathGroupsExcludedImportTypes": ["builtin"],
        "alphabetize": { "order": "asc", "caseInsensitive": true },
        "pathGroups": [
          { "pattern": "src/types/**", "group": "internal", "position": "before" },
          { "pattern": "src/repositories/**", "group": "internal", "position": "before" },
        ]
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
