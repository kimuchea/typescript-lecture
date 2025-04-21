module.exports = {
  evn: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  plugin: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': [
      'warn',
      {
        allow: ['info', 'warn', 'error'],
      },
    ],
  },
};
