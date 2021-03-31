import { Router } from 'express';
import UserController from '../controller/userController';

export default class UserRouter {
  public router: Router;
  private userController: UserController = new UserController();

  constructor(){
    this.router = Router();
    this.initUserRouter();
  }

  public initUserRouter(){
    this.router.route('/').get(this.userController.getAll);
    this.router.route('/search').get(this.userController.findByName);
    this.router.route('/:id').get(this.userController.findById);
    this.router.route('/signin').post(this.userController.signin);
  }
};