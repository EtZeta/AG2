module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  ignorePatterns: ['**/*.html'],
  rules: {
    'multiline-ternary': 'never',
    'max-len': [1, { code: 150 }],
    'no-tabs': 0,
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off'
  }
}
