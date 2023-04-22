import { Rol } from './rol.model';

export interface User {
  name: string;
  lastName: string;
  token: string;
  email?: string;
  age?: number;
  rol: Rol[];
}
