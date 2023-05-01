import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

/* NGRX */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AUTH_KEY, authReducer } from './components/login/state/auth.reducer';
import { AuthEffects } from './components/login/state/auth.effects';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [LoginComponent, DashboardComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    StoreModule.forFeature(AUTH_KEY, authReducer),
    EffectsModule.forFeature(AuthEffects),
  ],
})
export class CoreModule {}
