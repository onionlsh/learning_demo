import { Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/HttpException';
import Log4js from '../../config/log4js';
const Logger = Log4js.getLogger('errorMiddleware');

//  express 的错误处理中间件有四个参数
function errorMiddleware(err: HttpException, req: Request, res: Response, next: NextFunction) {
  const status = err.status || 500;
  const message = err.message || 'System wrong';
  Logger.error('error message is ',message);
  res.status(status).send({
    status,
    message
  });
}

export default errorMiddleware;