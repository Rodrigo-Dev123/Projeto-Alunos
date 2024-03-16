module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-param-reassign': 'off',
    'import/no-named-as-default': 'off',
    quotes: 'off',
    'react/jsx-filename-extension': 'off',
    'object-curly-newline': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/button-has-type': 'off',
  },
};
