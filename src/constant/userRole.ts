export const UserRole = {
  OWNER: 'OWNER', //Administrador gral.
  ADMIN: 'ADMIN', //Admin de menor categoría
  SELLER: 'SELLER' //Vendedor
} as const;

export const UserStatus = {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  BLOCK: 'BLOCK'
} as const;

export type TUserRole = 'ADMIN' | 'OWNER' | 'SELLER';
export type TUserStatus = 'PENDING' | 'ACTIVE' | 'BLOCK';
