import { createReducer, on } from '@ngrx/store';
import { AuthAction } from './auth.action';
import { user } from './auth.selector';
import { authInitialState } from './auth.state';

export const AUTH_KEY = 'authState';

export const authReducer = createReducer(
  authInitialState,
  on(AuthAction.loading, (state) => ({ ...state, loading: true })),
  on(AuthAction.setCurrentUser, (state, action) => ({
    ...state,
    user: action.user,
  })),
  on(AuthAction.loginSuccess, (currentState, action) => ({
    ...currentState,
    user: action.user,
    loading: false,
  })),
  on(AuthAction.loginError, (currentState, action) => ({
    ...currentState,
    user: null,
    loading: false,
  }))

  /*
  on(PostAction.loadFilterSuccess, (state, action) => {
    return postAdapter.setAll(action.post, { ...state, loading: false });
  }),
  on(PostAction.addPostSuccess, (state, action) => {
    return postAdapter.addOne(action.post, { ...state, loading: false });
  }),
  on(PostAction.updatePostSuccess, (state, action) => {
    return postAdapter.updateOne(action.post, { ...state, loading: false });
  }),
  on(PostAction.deletePostSuccess, (state, action) => {
    return postAdapter.removeOne(action.post.id!, { ...state, loading: false });
  }) */
);
