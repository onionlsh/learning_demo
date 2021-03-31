
import log4js from 'log4js';

const config = {
  appenders: {
    debug: {
      type: 'console'
    },
    info: {
      type: 'dateFile',
      filename: 'logs/info',
      pattern: '-yyyy-MM-dd.log',
    },
    //错误日志 type:过滤类型logLevelFilter,将过滤error日志写进指定文件
    errorLog: { type: 'dateFile', filename: 'logs/error', pattern: '-yyyy-MM-dd.log'},
    error: { type: "logLevelFilter", level: "error", appender: 'errorLog' }
  },
  categories: {
    default: { appenders: ['debug','info','error'], level: 'debug' },
    info: {appenders: ['info','error'], level: 'info'}
  }
}

log4js.configure(config);
export default log4js;