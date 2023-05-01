import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthAction } from './core/components/login/state/auth.action';
import { AuthState } from './core/components/login/state/auth.state';
import { AuthSelectors } from './core/components/login/state/index.state';
import { Auth } from './core/models/auth/auth.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'VeterinariaYara-FE';

  loading$!: Observable<boolean>;

  constructor(private store: Store<AuthState>) {}

  ngOnInit(): void {
    console.log('Init home');

    this.loading$ = this.store.select(AuthSelectors.selectLoading);
    /*
    setTimeout(() => {
      this.store.dispatch(AuthAction.loading({ loading: true }));
    }, 3000);

    setTimeout(() => {
      const user: Auth = {
        name: 'xd',
        contrasenia: 'xddd',
      };

      this.store.dispatch(AuthAction.login({ auth: user }));
    }, 3000); */
  }
}
