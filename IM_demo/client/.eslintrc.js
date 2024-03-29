module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "rules": {
    "no-debugger": process.env.NODE_ENV==="production" ? 2 : 0  //开发环境不限制debbug
  }
}