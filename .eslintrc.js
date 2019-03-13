module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier/vue'
  ],
  rules: {},
  env: {
    browser: true,
    node: true,
    jest: true
  },
  globals: {
    expect: true,
    window: true
  }
}
