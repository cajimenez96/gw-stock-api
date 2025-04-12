import { z } from 'zod';

const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6, { message: 'password must have 6 characters' })
});

const registerNewUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6, { message: 'password must have 6 characters' }),
  role: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  phone: z.string().optional(),
});

const updatedProfileSchema = z.object({
  name: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  avatar: z.string().optional()
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: 'password must have 6 characters' })
});

const changePasswordSchema = z.object({
  oldPassword: z
    .string({ required_error: 'Old Password is required!' })
    .min(6, { message: 'old password must have 6 characters' }),
  newPassword: z
    .string({ required_error: 'New Password is required!' })
    .min(6, { message: 'new password must have 6 characters' })
});

const userValidator = {
  registerSchema,
  registerNewUserSchema,
  loginSchema,
  updatedProfileSchema,
  changePasswordSchema
};
export default userValidator;
