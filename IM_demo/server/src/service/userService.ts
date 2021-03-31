import UserModel from '../model/userModel';
import MD5 from 'md5-node';
import MsgCode from '../config/msgCode.config';
import Log4js from '../config/log4js';
const Logger = Log4js.getLogger('UserService');

/**
 * 业务层
 */
export default class UserService {

  private userModel = new UserModel();

  public getAllUser:any = () => {
    return new Promise((resolve) => {
      this.userModel.getAll().then(data => {
        Logger.debug('getAllUser result:', data); 
        resolve(data);
      });
    });
  };

  public findByName: any = (name) => {
    return new Promise((resolve) => {
      this.userModel.findByName(name).then(data => {
        Logger.debug('findByName result:', data); 
        resolve(data);
      });
    });
  };

  public findById: any = (id) => {
    return new Promise((resolve) => {
      this.userModel.findById(id).then(data => {
        Logger.debug('findById result:', data); 
        resolve(data);
      });
    });
  }

  /**
   * 登录
   * @param name 
   * @param password 
   */
  public signin = (name, password) => {
    return new Promise((resolve) => {
      this.userModel.getByName(name).then(user => {
        Logger.debug('signin findByName result:', JSON.stringify(user)); 
        if(user !== null) {
          const pwd = MD5(password);
          const userPwd = user.password;
          if(pwd === userPwd){
            resolve({code: MsgCode.SUCCESS, message: '登录成功'});
          }else {
            resolve({code: MsgCode.PASSWROD_WRONG, message: '帐号或密码错误'});
          }
        }else {
          resolve({code: MsgCode.USER_NON_EXIST, message: '用户不存在'});
        }
      });
    });
  }

}