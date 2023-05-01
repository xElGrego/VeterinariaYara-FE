import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, distinctUntilChanged, map, tap } from 'rxjs';
import { Role } from 'src/app/configs/roles';
import { AuthState } from 'src/app/core/components/login/state/auth.state';
import { AuthSelectors } from 'src/app/core/components/login/state/index.state';

@Directive({
  selector: '[appShowRoles]',
})
export class ShowRolesDirective implements OnInit, OnDestroy {
  @Input('appShowRoles') roles?: Role[];
  private sub?: Subscription;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private store: Store<AuthState>
  ) {}

  ngOnInit(): void {
    this.sub = this.store
      .select(AuthSelectors.user)
      .pipe(
        map((user) =>
          Boolean(user && this.roles?.some((role) => user.rol.includes(role)))
        ),
        distinctUntilChanged(),
        tap((hasRole) => {
          console.log('hasRole', hasRole);
          hasRole
            ? this.viewContainerRef.createEmbeddedView(this.templateRef)
            : this.viewContainerRef.clear();
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    console.log('Destroy rol directive');
    this.sub?.unsubscribe();
  }
}
