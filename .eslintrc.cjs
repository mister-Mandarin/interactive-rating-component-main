/* eslint-env node */

module.exports = {
  env: { browser: true, es6: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/prop-types": 0,
    "indent": [
      "error",
      2
    ],
    "linebreak-style": 1,
    "quotes": [
      "error",
      "single"
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off"
  },
}
