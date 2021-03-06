module.exports = {
  extends: ['plugin:prettier/recommended', 'plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  plugins: ['react'],
  globals: {
    document: true,
  },
  rules: {
    'global-require': 0,
    'no-console': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 0,
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};
