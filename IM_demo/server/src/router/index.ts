import { Router} from "express";
import UserRouter from './user';

const router = Router();
const user = new UserRouter().router;

router.use('/user',user);

export default router;