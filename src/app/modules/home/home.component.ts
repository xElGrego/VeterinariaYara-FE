import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { AuthSelectors } from 'src/app/core/components/login/state/index.state';
import { User } from 'src/app/core/models/auth/user.model';

import { NgxSpinnerService } from 'ngx-spinner';
import { AuthState } from 'src/app/core/components/login/state/auth.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  user$!: Observable<User | null>;
  token: string = '';
  name: string = '';
  lastName: string = '';

  constructor(
    private store: Store<AuthState>,
    private router: Router,
    private SpinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.user$ = this.store.select(AuthSelectors.user);

    this.user$.subscribe((user) => {
      if (user) {
        this.token = user.token;
        this.name = user.name;
        this.lastName = user.lastName;
      }
    });
  }

  Navigate(ruta: string) {
    this.router.navigate([ruta]);
  }
}
