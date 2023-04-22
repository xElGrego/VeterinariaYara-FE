import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { AuthSelectors } from 'src/app/core/components/login/state/index.state';
import { User } from 'src/app/core/models/auth/user.model';
import { token } from '../../../../core/components/login/state/auth.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  user$!: Observable<User | null>;
  token: string = '';

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.user$ = this.store.select(AuthSelectors.user);

    this.user$.subscribe((user) => {
      if (user) {
        this.token = user.token;
        console.log('TOkenXD', this.token);
      }
    });
  }
}
