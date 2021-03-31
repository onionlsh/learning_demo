import express from 'express'
import cors from 'cors';
import mongoose from 'mongoose';
import { json, urlencoded } from 'body-parser';
import router from './router';
import { DB_URL } from './config/db';
import ErrorMiddleware from './utils/middleware/error';
import Log4js  from './config/log4js';
const Logger =  Log4js.getLogger('app');

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initLog4js();
    this.config();
    // 引入路由
    this.app.use(router);
    // 引入MongoDB
    this.setMongoConfig();
    this.initErrorHandler();
    
  }

  private config(){
    this.app.use(cors()); //使用cors
    this.app.use(json()); // 支持 application/json 类型
    this.app.use(urlencoded({extended: false}));  // 支持 application/x-ww-form-urlencoded
    //this.app.use(morgan('dev'));  // 日志中间件
  }

  // MongoDB配置
  private setMongoConfig(){
    mongoose.Promise = global.Promise;
    mongoose.connect(DB_URL, {
      useNewUrlParser: true
    });
    mongoose.connection.on('error', (error) => {
      Logger.error('MongoDB链接失败，error:', JSON.stringify(error));
    });
    mongoose.connection.on('open', () => {
      //Logger.info('MongoDB链接成功');
    });
  }

  private initErrorHandler() {
    this.app.use(ErrorMiddleware);
  }

  private initLog4js() {
    const logger = Log4js.getLogger('http');
    this.app.use(Log4js.connectLogger(logger, {level: 'info'}))
  }
}

export default new App().app;