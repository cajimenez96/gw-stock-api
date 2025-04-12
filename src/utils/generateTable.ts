import { IUser } from "../modules/user/user.interface";

export const tableData = (users: IUser[]) => users.map((user, index) => ({
  key: index, // Convertir ObjectId a string
  name: user.name || '',
  email: user.email || '',
  title: user.title || '', // Ejemplo de campo anidado
  description: user.description || '',
  role: user.role || '',
  status: user.status || '',
  address: user.address || '',
  phone: user.phone || '',
  city: user.city || '',
  country: user.country || '',
}));