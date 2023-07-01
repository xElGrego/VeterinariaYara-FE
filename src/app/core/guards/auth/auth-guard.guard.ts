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
import { StorageService } from '../../services/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  user$!: Observable<User | null>;

  constructor(private storageService: StorageService, private router: Router) {}
  canActivate() {
    console.log('Valor', this.storageService.hasToken());
    if (this.storageService.hasToken()) {
      this.router.navigate(['']);
    }
    /* this.router.navigate(['login']); */
    return false;
  }

  /*  canActivate(
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
        console.log('Autenticado', isAuthenticated);
        if (isAuthenticated) {
          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      })
    );
  } */
}
