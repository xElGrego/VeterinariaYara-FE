import { createFeatureSelector, createSelector } from '@ngrx/store';

import { state } from '@angular/animations';
import { AuthState } from './auth.state';
import { AUTH_KEY } from './auth.reducer';

const authState = createFeatureSelector<AuthState>(AUTH_KEY);

/* export const postSelectors = authAdapter.getSelectors(); */

export const selectLoading = createSelector(
  authState,
  (state) => state.loading
);

export const user = createSelector(authState, (auth) => auth.user);

export const token = createSelector(authState, (auth) => auth.user?.token);

export const rol = createSelector(authState, (auth) => auth.user?.rol);
