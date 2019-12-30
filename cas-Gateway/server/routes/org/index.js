const express = require('express');
const router = express.Router();
const logger = require('../../logs').logger;
const common = require('../../common');
const { getOrgById } = require('./data')


router.post('/switch', (req, res) => {
  logger.info('[org/switch] request body:', req.body);
  const { orgId, userId } = req.body;
  if(userId){
    const data = getOrgById(orgId, userId);
    res.send({
      code: 200,
      data
    })
  }else{
    logger.error('[org/switch] response error 501');
    res.send(common[10001]);
  }
})

module.exports = router;