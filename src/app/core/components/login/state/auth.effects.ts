import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
  of,
  switchMap,
  tap,
} from 'rxjs';

import { Update } from '@ngrx/entity';
import { Toast } from 'src/app/shared/functions/toast';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { AuthAction } from './auth.action';
import { User } from 'src/app/core/models/auth/user.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  Toast = new Toast();

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthAction.login),
      exhaustMap((action) => {
        return this.authService.Login(action.auth).pipe(
          map((user: User) => {
            return AuthAction.loginSuccess({ user });
          }),
          tap((xd) => {
            console.log('Navegandohome');
            this.router.navigate(['/']);
          }),
          catchError(() =>
            of(
              AuthAction.loginError({
                errorMessage:
                  'Ha ocurrido un error al cargar la informacció del cliete',
              })
            )
          )
        );
      })
    )
  );

  notifyApiError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthAction.loginError),
        /* Aqui llamar al toast */
        tap((action) => {
          console.log(action);
          this.Toast.ToastError(action.errorMessage);
        })
      ),
    { dispatch: false }
  );
}
