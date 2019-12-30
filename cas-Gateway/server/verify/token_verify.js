const jwt = require('jsonwebtoken');
const logger = require('../logs').logger;

const SIGN_KEY = 'CAS_project';
exports.sign_key = SIGN_KEY;

//设置token
exports.setToken = (userCode) => {
  try {
    const token = jwt.sign({
      _id: userCode
    }, SIGN_KEY, {
      expiresIn: 3600
    });
    return token;
  } catch (error) {
    logger.error(error);
  }
}

//校验token
exports.verifyToken = (token) => {
  return jwt.verify(token.split(' ')[1], SIGN_KEY);
}