import translation from './translation.js';

const zh_cn = _.mapValues(translation, (item) =>{
  return item[0];
});
export default zh_cn;