const express = require('express');
const router = express.Router();
const { getUserById } = require('./data');
const logger = require('../../logs').logger;
const common = require('../../common')


//获取用户信息
router.post('/info', (req, res) => {
  logger.info('[user/info] request body:', req.body);
  const { userId } = req.body;
  if(userId){
    const data = getUserById(userId);
    if(data){
      res.send({
        code: 200,
        data
      });
    }else{
      logger.error('[user/info] response error 502')
      res.send(common[10002])
    }
  }else{
    logger.error('[user/info] response error 501')
    res.send(common[10001]);
  }
});

module.exports = router;