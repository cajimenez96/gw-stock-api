import { Router } from 'express';
import userControllers from './user.controllers';
import validateRequest from '../../middlewares/validateRequest';
import userValidator from './user.validator';
import verifyAuth from '../../middlewares/verifyAuth';
import verifyRole from '../../middlewares/verifyRole';

const userRoutes = Router();

userRoutes.post('/register', validateRequest(userValidator.registerSchema), userControllers.register);
userRoutes.post('/login', validateRequest(userValidator.loginSchema), userControllers.login);
userRoutes.get('/self', verifyAuth, userControllers.getSelf);
userRoutes.post(
  '/change-password',
  verifyAuth,
  validateRequest(userValidator.changePasswordSchema),
  userControllers.changePassword
);
userRoutes.patch('/', verifyAuth, userControllers.updateProfile);

userRoutes.get('/', verifyAuth, verifyRole('OWNER', 'ADMIN'), userControllers.getProfiles)

export default userRoutes;
