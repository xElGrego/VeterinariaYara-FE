import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialExampleModule } from '../material.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* NGRX */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AUTH_KEY, authReducer } from './components/login/state/auth.reducer';
import { AuthEffects } from './components/login/state/auth.effects';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialExampleModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    StoreModule.forFeature(AUTH_KEY, authReducer),
    EffectsModule.forFeature(AuthEffects),
  ],
})
export class CoreModule {}
