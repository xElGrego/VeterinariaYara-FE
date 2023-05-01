import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/core/components/login/state/auth.state';
import { AuthSelectors } from 'src/app/core/components/login/state/index.state';
import { User } from 'src/app/core/models/auth/user.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  user$!: Observable<User | null>;

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toogleTheme = new EventEmitter<void>();
  @Output() toogleDir = new EventEmitter<void>();

  constructor(private store: Store<AuthState>) {}

  ngOnInit(): void {
    this.user$ = this.store.select(AuthSelectors.user);
  }
}
