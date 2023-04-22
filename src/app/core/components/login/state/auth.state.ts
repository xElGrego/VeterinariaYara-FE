import { User } from 'src/app/core/models/auth/user.model';

export interface AuthState {
  user: User | null;
  loading: boolean;
}

export const authInitialState: AuthState = {
  user: null,
  loading: false,
};
