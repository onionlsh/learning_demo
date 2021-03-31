import { NextFunction, Request, Response } from 'express';
import UserService from '../service/userService';
import HttpException from '../utils/exceptions/HttpException';
import MsgCode from '../config/msgCode.config';
import Log4js from '../config/log4js';
const Logger = Log4js.getLogger('UserController');

/**
 * 业务模块控制层
 */
export default class UserController {

  private userService = new UserService(); 

  /**
   * 查询全部用户
   * @param request 
   * @param response 
   * @param next 
   */
  public getAll = async (request: Request, response: Response, next: NextFunction) => {
    this.userService.getAllUser().then(data => {
      response.send({
        code: MsgCode.SUCCESS,
        data
      });
    }).catch(err => {
      next(new HttpException(MsgCode.SYSTEM_ERROR, '无法查询getAll，请确认是否存在users集合'));
    });
  };

  /**
   * 根据关键字查询用户
   * @param request 
   * @param response 
   * @param next 
   */
  public findByName = async (request: Request, response: Response, next: NextFunction) => {
    const name = request.query.name || '';
    this.userService.findByName(name).then(data => {
      response.send({
        code: MsgCode.SUCCESS,
        data
      });
    }).catch(err => {
      next(new HttpException(MsgCode.SYSTEM_ERROR, `name: ${name} not find`));
    });
  };

  /**
   * 根据ID查询用户
   * @param request 
   * @param response 
   * @param next 
   */
  public findById = async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id.toString();
    this.userService.findById(id).then(data=> {
      response.send({
        code: MsgCode.SUCCESS,
        data
      });
    }).catch(err => {
      next(new HttpException(MsgCode.SYSTEM_ERROR, `id: ${id} is illegal`));
    });
  };

  /**
   * 登录
   * @param request 
   * @param response 
   * @param next 
   */
  public signin = async (request: Request, response: Response, next: NextFunction) => {
    Logger.debug('signin',request.body)
    const { name, password } = request.body;
    this.userService.signin(name, password).then(data => {
      response.send(data);
    }).catch(err => {
      next(new HttpException(MsgCode.SYSTEM_ERROR, `name: ${name} is illegal`));
    });
  }

}