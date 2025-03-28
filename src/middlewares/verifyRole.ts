import { TUserRole } from './../constant/userRole';
import { Request, Response, NextFunction } from 'express';

const verifyRole = ( ...roles: TUserRole[] ) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const user = req.user;

    if (!roles.includes(user.role as TUserRole)) {
      return _res.status(403).json({ message: 'Forbidden: You do not have access' }); 
    }

    next();
  }
};

export default verifyRole;
