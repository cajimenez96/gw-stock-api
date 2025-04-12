import { TUserRole, TUserStatus } from '../../constant/userRole';

export interface IUser {
  name: string;
  email: string;
  role: TUserRole;
  avatar?: string;
  password: string;
  status: TUserStatus;
  address?: string;
  phone?: string;
  city?: string;
}
