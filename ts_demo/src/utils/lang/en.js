import translation from './translation.js';

const en_us = _.mapValues(translation, (item) =>{
  return item[1];
});
export default en_us;