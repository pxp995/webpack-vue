module.exports = {
  root: true, // 定义根目录
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // 自定义的规则
  'rules': {
    "semi": [2, "always"],
  }
}
