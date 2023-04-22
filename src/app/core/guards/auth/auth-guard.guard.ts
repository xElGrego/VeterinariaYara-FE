import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { User } from '../../models/auth/user.model';
import { AuthSelectors } from '../../components/login/state/index.state';
import { Store } from '@ngrx/store';
import { AuthState } from '../../components/login/state/auth.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  user$!: Observable<User | null>;

  constructor(private router: Router, private store: Store<AuthState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.select(AuthSelectors.user).pipe(
      take(1),
      map((isAuthenticated) => {
        if (isAuthenticated) {
          console.log('User', isAuthenticated);

          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      })
    );
  }
}
