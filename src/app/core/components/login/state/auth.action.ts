import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Auth } from 'src/app/core/models/auth/auth.model';
import { User } from 'src/app/core/models/auth/user.model';

export const AuthAction = createActionGroup({
  source: 'Auht Page',
  events: {
    loading: props<{ loading: boolean }>(),
    login: props<{ auth: Auth }>(),
    'login Success': props<{ user: User }>(),
    'login Error': props<{ errorMessage: string }>(),
    'set current user': props<{ user: User }>(),
  },
});
