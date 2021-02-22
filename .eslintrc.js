module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      restParams: true,
      spread: true
    }
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/base',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
