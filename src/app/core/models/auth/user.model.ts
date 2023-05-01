import { Role } from 'src/app/configs/roles';

export interface User {
  name: string;
  lastName: string;
  token: string;
  email?: string;
  age?: number;
  rol: Role;
}
