import * as mongoose from 'mongoose';
import { UserSchema } from "../schema/user";
import Log4js from '../config/log4js';
const Logger = Log4js.getLogger('UserModel');

const user = mongoose.model('user', UserSchema);

export default class UserModel {

  private static FILTER_ID_PWD = {_id: 0, password: 0};
  private static FILTER_ID = { _id: 0 };
  private static FILTER_PWD = { password: 0};

  public getAll = () => {
    return new Promise(resolve => {
      let dataList: Array<Object> = [];
      const query = user.find({},UserModel.FILTER_PWD);
      query.exec((err, data) => {
        if(err){
          Logger.error('getAllUser ===== SQL result is error:', JSON.stringify(err));
        }else {
          Logger.info('getAllUser ===== result: ',JSON.stringify(data));
          dataList = data;
        }
        resolve(dataList);
      });
    });
  }

  public findByName = (name) => {
    return new Promise((resolve) => {
      let dataList: Array<Object> = [];
      const queryName = new RegExp(`${name}`);
      Logger.info('findByName ====== name is ', queryName);

      const query = user.find({username: queryName},UserModel.FILTER_PWD);
      query.exec((err, data) => {
        if(err){
          Logger.error('findByName ===== SQL result is error:', JSON.stringify(err));
        }else {
          Logger.info('findByName ===== result: ',JSON.stringify(data));
          dataList = data;
        }
        resolve(dataList);
      });
    });
  }

  public findById = (id) => {
    return new Promise((resolve) => {
      let result: any = null;
      const query = user.findById(id, UserModel.FILTER_PWD)
      query.exec((err, data) => {
        if(err){
          Logger.error('findById ===== SQL result is error:', JSON.stringify(err));
        }else {
          Logger.info('findById ===== result: ',JSON.stringify(data));
          result = data;
        }
        resolve(result);
      });
    });
  }

  /**
   * 
   * @param name 
   */
  public getByName: any = (name) => {
    return new Promise((resolve) => {
      Logger.debug('getByName ===== name :', name);
      let result: any = null;
      const query = user.findOne({username: name});
      query.exec((err, data) => {
        if(err){
          Logger.error('findByName ===== SQL result is error:', JSON.stringify(err));
        }else {
          Logger.info('findByName ===== result: ',JSON.stringify(data));
          result = data;
        }
        resolve(result);
      });
    });
  }


  
}
