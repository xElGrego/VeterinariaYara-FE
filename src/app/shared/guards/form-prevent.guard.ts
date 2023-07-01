import { CanDeactivateFn } from '@angular/router';

export interface HasUnsaveChanges {
  hasUnsaveChanges(): boolean;
}

export const formPreventGuard: CanDeactivateFn<HasUnsaveChanges> = (
  component
) => {
  console.log('AQUI');

  if (component.hasUnsaveChanges()) {
    return confirm('Desea salir sin guardar');
  }
  return true;
};
