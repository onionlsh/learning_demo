var express = require('express');
var router = express.Router();
const common = require('../../common');
const logger = require('../../logs').logger;
const { getMenuById } = require('./data');

router.post('/', (req, res) => {
  logger.info('[menu] request body:',req.body);

  const { userId, orgId } = req.body;
  if(userId){
    const data = getMenuById(orgId, userId);
    res.send({
      code: 200,
      data
    });
  }else{
    res.send(common[10001]);
  }
});

module.exports = router;