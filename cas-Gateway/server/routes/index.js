var express = require('express');
var router = express.Router();
const {getUserByCode} = require('./users/data/index');
const common = require('../common')
const logger = require('../logs/index').logger;
const { setToken } = require('../verify/token_verify');


//登陆
router.post('/login', function(req, res, next) { 
  logger.info('[login] request body',req.body);

  const {userCode, password} = req.body;
  if(userCode && password){
    const data = getUserByCode(userCode);
    logger.info('[login] response data:', data); 
    
    if(JSON.stringify(data) !== '{}'){
      let token = setToken(userCode);
      token = 'Bearer ' + token;
      res.send({
        code:200,
        data: {...data, token}
      });
    }else{
      res.send(common[10002]);
    }
  }else{
    logger.error('[login] error');
    res.send(common[10001]);
  }
});


//注销
router.post('/logout', (req, res) => {
  logger.info('[logout] request body:',req.body);

  const {userId} = req.body;
  if(userId){
    res.send({
      code: 200
    });
  }else{
    res.send(common[10001]);
  }
});

//刷新token
router.post('/refresh',(req, res) =>{
  const {userId} = req.body;
  const token = 'Bearer ' + setToken(userId);
  if(token){
    res.send({token});
  }else{
    res.status(500).send(errorMsg[10004]);
  }
  
});

module.exports = router;
